# NotificationSystem

A lightweight, elegant, and highly customizable notification system for your web applications. This dependency-free JavaScript library allows you to display contextual toast notifications with different styles and positions.

![Notification System Demo](demo-screenshot.jpg)

## Features

- 🚀 **Lightweight & Dependency-free** - No external libraries needed
- 🎨 **4 Notification Types** - Success, Error, Information, Warning
- 🧩 **Simple and Intuitive API** - Easy to implement and use
- 📱 **Responsive & Compatible** - Works on all modern browsers
- ⚡ **Smooth Animations** - Elegant transitions for appearance and disappearance
- 🔧 **Highly Customizable** - Positions, durations, styles, and more

## Installation

Download the `notifications.js` file and include it in your project:

```html
<script src="path/to/notifications.js"></script>
```

## Usage

### Basic Initialization

```javascript
// Create a notification system instance
const notifications = new NotificationSystem();

// Display different types of notifications
notifications.success('Title', 'Success message');
notifications.error('Error', 'Error message');
notifications.info('Info', 'Information message');
notifications.warning('Warning', 'Warning message');
```

### Customization

```javascript
// Initialize with custom options
const notifications = new NotificationSystem({
    position: 'bottom-right',  // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
    duration: 8000,            // Display duration in milliseconds
    animationDuration: 300     // Animation duration in milliseconds
});
```

### Manual Control

```javascript
// Display a notification and store its reference
const notification = notifications.info('Title', 'Message');

// Manually close the notification after a certain time
setTimeout(() => {
    notification.close();
}, 2000);
```

## Options

| Option | Type | Default | Description |
|--------|------|------------|-------------|
| `position` | String | `'top-right'` | Notification position. Possible values: `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'` |
| `duration` | Number | `5000` | Display duration in milliseconds. `0` for persistent notification |
| `animationDuration` | Number | `300` | Animation duration in milliseconds |

## PHP Integration

Example of integration with PHP to display server messages:

```php
<?php
// In your PHP code
$message = "Operation successful";
$messageType = "success"; // success, error, info, warning
?>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const notifications = new NotificationSystem();
    
    <?php if (!empty($message)): ?>
        notifications.<?php echo $messageType; ?>(
            '<?php echo ucfirst($messageType); ?>', 
            '<?php echo addslashes($message); ?>'
        );
    <?php endif; ?>
});
</script>
```

## Ajax Example

```javascript
fetch('your-api-url', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    // On success
    notifications.success('Success', data.message);
})
.catch(error => {
    // On error
    notifications.error('Error', 'Request error: ' + error.message);
});
```

## Style Customization

You can customize the appearance of notifications by adding your own CSS that will override the default styles.

## Compatibility

Compatible with all modern browsers (Chrome, Firefox, Safari, Edge).

## License

[MIT](LICENSE)

---

Created with ❤️ to simplify the user experience. Feel free to contribute!