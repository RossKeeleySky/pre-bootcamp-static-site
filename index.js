const tilesData = [
    {
        "title": "Link 1",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Link one is the first link and it's the first link because it left the house first. It wasn't lucky. It just didn't hit snooze on the alarm this morning",
        "image": ""
    },
    {
        "title": "Link 2",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 3",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 4",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 5",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 6",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 7",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 8",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 9",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    },
    {
        "title": "Link 10",
        "link": "https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.1620053617.fit_lim.size_1200x630.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "image": ""
    }
];

function makeUL(array) {
    // Create the list element:
    const list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        // Create the list item:
        let listItem = document.createElement('li');

        // Set its contents:
        let listItemTitle = document.createElement('h3'),
            listItemDescription = document.createElement('p');
        listItemTitle.appendChild(document.createTextNode(array[i].title));
        listItemDescription.appendChild(document.createTextNode(array[i].description));
        listItem.appendChild(listItemTitle);
        listItem.appendChild(listItemDescription);

        // Add it to the list:
        list.appendChild(listItem);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(tilesData));

