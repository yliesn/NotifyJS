// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize notification system with default options
    let notifSystem = new NotificationSystem();
    
    // Reference to buttons
    const successBtn = document.getElementById('success-btn');
    const errorBtn = document.getElementById('error-btn');
    const infoBtn = document.getElementById('info-btn');
    const warningBtn = document.getElementById('warning-btn');
    const applyOptionsBtn = document.getElementById('apply-options');
    
    // Add event listeners for notification buttons
    successBtn.addEventListener('click', function() {
        notifSystem.success('Operation successful', 'Your action has been completed successfully!');
    });
    
    errorBtn.addEventListener('click', function() {
        notifSystem.error('Error', 'An error occurred while processing your request.');
    });
    
    infoBtn.addEventListener('click', function() {
        notifSystem.info('Information', 'You have a new message in your inbox.');
    });
    
    warningBtn.addEventListener('click', function() {
        notifSystem.warning('Warning', 'Your subscription expires in 3 days.');
    });
    
    // Configuration options management
    applyOptionsBtn.addEventListener('click', function() {
        // Get option values
        const position = document.getElementById('position').value;
        const durationAnimation = parseInt(document.getElementById('durationAnimation').value);
        const durationDisplay = parseInt(document.getElementById('durationDisplay').value);


        
        // Create a new instance with updated options
        // We reset the instance to avoid issues with multiple containers
        notifSystem = new NotificationSystem({
            position: position,
            duration: durationDisplay,
            animationDuration: durationAnimation, 
        });
        
        // Display notification to confirm the change
        notifSystem.info('Options Applied', 'New notification settings have been applied.');
    });
});