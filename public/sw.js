self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      badge: '/icon.png',
      body: data.body,
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
      icon: data.icon || '/icon.png',
      vibrate: [100, 50, 100],
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  // eslint-disable-next-line no-undef
  event.waitUntil(clients.openWindow('https://www.bestseenonfoot.com'))
})