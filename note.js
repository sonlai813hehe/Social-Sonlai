document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.social-container');
    
    // Đảm bảo container được ẩn trước khi hiển thị mượt mà
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1s ease-in';

        // Hiển thị container sau một chút thời gian
        setTimeout(() => {
            container.style.opacity = 1;
        }, 100);
    }
});