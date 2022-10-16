# Landing Page Project

## Table of Contents

- [Introduction](#Introduction)
- [Navigation](#Navigation)
- [Active](#Active)
- [Scroll](#Scroll)

## Introduction

It's a simple landing page made by HTML , CSS and Javascript .

## Navigation

It contains a navigation bar which consisted of page's sections that added dynamicaly.

It done by CreateNav() function that iterates through all sections and appended to the navList.

## Active

It done by ActiveClass() function which itreates through all sections and get the exact place of section to the viewport by getBoundingClientRect() function and if it's within the viewport we add "your-active-class" to section's classList which in the end turns it to active .

## Scroll

It done by ScrollToID() function that add click event in Navlist which listen when client click on navigation bar , If click on list item ("li") it fires up the body of the if condtion which gets the section element that been clicked and we get the offsetTop position and scrollTo section smoothly.
