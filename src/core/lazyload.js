// 懒加载主函数（使用节流，初始化有800ms延迟）
const lazyload = function(lazyImages) {
    let active = false;
    if (active === false) {
        active = true;
        setTimeout(function() {
            lazyImages.forEach(lazyImage => {
                if (
                    (
                        // 在可视范围内
                        lazyImage.getBoundingClientRect().top <= window.innerHeight
                            && lazyImage.getBoundingClientRect().bottom >= 0
                    )
                    && getComputedStyle(lazyImage).display !== 'none'
                ) {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImages = lazyImages.filter(image => {
                        return image !== lazyImage;
                    })
                }
            })
            active = false;
        }, 800)
    }
}

export default lazyload;