
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDiDRg8T5o1lR5RJdspNpuB10W-zpgrFv0","authDomain":"prod-hischool.firebaseapp.com","databaseURL":"https:\u002F\u002Fprod-hischool.firebaseio.com","projectId":"prod-hischool","storageBucket":"prod-hischool.appspot.com","messagingSenderId":"591828393672","appId":"1:591828393672:web:69ee94c39a85b400108ffd","measurementId":"G-E1QHH6HHQ8"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info("SW received the message: ", payload);
  const notification = payload.notification;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: "Visit",
        action: notification.clickPath
      }
    ]
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})
