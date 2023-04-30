function slider() {
    let offset = 0; // снедение от левого кpan
    let numberImage = 0;

    const sliderLine = document.querySelector('.slider_line');

    const sliderContainerWidth = document.querySelector('.slider').offsetWidth;

    let maxWidth = 0;

    const itemElements = document.getElementsByClassName("item")
    const maxNumberImage = (document.getElementsByClassName("item").length - 1)

    // Default settings margins for the first element
    const imgOffsetWidth = document.getElementsByClassName("item")[0].childNodes[0].offsetWidth;
    const y = (sliderContainerWidth - imgOffsetWidth) / 2;
    document.getElementsByClassName("item")[0].style.marginLeft = y + 'px';
    document.getElementsByClassName("item")[0].style.marginRight = y + 'px';

    for (const item of itemElements) {
        const image = item.childNodes[0];
        maxWidth = maxWidth + image.offsetWidth;
    }
    document.querySelector('.next').addEventListener('click', function () {
        const imgOffsetWidth = document.getElementsByClassName("item")[numberImage].childNodes[0].offsetWidth;
        const y = (sliderContainerWidth - imgOffsetWidth) / 2;

        if (numberImage < maxNumberImage) {
            document.getElementsByClassName("item")[numberImage + 1].style.marginLeft = y + 'px';
            document.getElementsByClassName("item")[numberImage + 1].style.marginRight = y + 'px';
        }

        if (numberImage > 0) {
            document.getElementsByClassName("item")[numberImage].style.marginLeft = 0 + 'px';
            document.getElementsByClassName("item")[numberImage].style.marginRight = 0 + 'px';
        }
        if (numberImage === maxNumberImage) {
            document.getElementsByClassName("item")[0].style.marginLeft = y + 'px';
            document.getElementsByClassName("item")[0].style.marginRight = y + 'px';
        } else {
            document.getElementsByClassName("item")[0].style.marginLeft = 0 + 'px';
            document.getElementsByClassName("item")[0].style.marginRight = 0 + 'px';
        }

        offset = offset + (imgOffsetWidth);

        if (offset >= maxWidth) {
            offset = 0;
            numberImage = 0;
        } else {
            numberImage++;
        }
        sliderLine.style.left = -(offset) + 'px';
    });

    document.querySelector('.prev').addEventListener('click', function () {
        const imgOffsetWidth = document.getElementsByClassName("item")[numberImage].childNodes[0].offsetWidth;
        const y = (sliderContainerWidth - imgOffsetWidth) / 2;

        if (numberImage === 0) {
            numberImage = maxNumberImage;
            document.getElementsByClassName("item")[numberImage].style.marginLeft = y + 'px';
            document.getElementsByClassName("item")[numberImage].style.marginRight = y + 'px';
            document.getElementsByClassName("item")[0].style.marginLeft = 0 + 'px';
            document.getElementsByClassName("item")[0].style.marginRight = 0 + 'px';
        } else {
            document.getElementsByClassName("item")[numberImage - 1].style.marginLeft = y + 'px';
            document.getElementsByClassName("item")[numberImage - 1].style.marginRight = y + 'px';

            document.getElementsByClassName("item")[numberImage].style.marginLeft = 0 + 'px';
            document.getElementsByClassName("item")[numberImage].style.marginRight = 0 + 'px';
        }

        offset = offset - (imgOffsetWidth);

        if (offset < 0) {
            offset = maxWidth - imgOffsetWidth;
            numberImage = 2;
        } else {
            if (numberImage > 0) {
                numberImage--;
            }
        }

        sliderLine.style.left = -offset + 'px';
    });
};
slider();