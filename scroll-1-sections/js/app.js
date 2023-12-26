// Intersection observer API is to trigger an event when an element is visible on the user's screen

/* MDN explaination: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

    Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as:

    Lazy-loading of images or other content as a page is scrolled.
    Implementing "infinite scrolling" websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
    Reporting of visibility of advertisements in order to calculate ad revenues.
    Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.
*/


// create an intersection observer
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});


const hiddenElements = document.querySelectorAll('.hidden')

// give it a terget element to watch
hiddenElements.forEach((el) => observer.observe(el))