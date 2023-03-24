# Globetrotters

## Description
The GlobeTrotters app provides the user with the ability to search details about about any country. The app provides the user with details like the Capital, Number of new covid cases (api.covid19api.com), population (), Weather (api.openweathermap.org), Country data(Json-File), and image(api.flickr.com).

The app can be extended to include other information like flight details, best times to visit and key landmarks.

Link to code : TBC


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Mock Up](#mock_up)
- [File Structure](#file_structure)
- [Badges](#badges)
- [License](#license)
- [Credits](#credits)

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/thomasptharakan/globetrotters.git
   
   ```


## Usage

1. Navigate to the cloned folder

2. To install dependencies run
```sh
    npm i 
```
3. To execute the code start
```sh
    npm start
```


## Mock_Up
The following mockup provides an overview of the output html generated:

![Sample html image of Profile Site generated](/src/assets/images/GT_Screen.png)



## File_Structure
```
├── public
│   └── index.html
│   └── manifest.json
│   └── favicon.ico
├── src
│   └── assets
│   |    └── data
│   |       └── country-data.json
│   |    └── images
│   |       └── amar.png
│   |       └── GT_Screen.png
│   |       └── TT.png
│   |       └── waseem.png
│   └──Components
│   |    └── Covid.js
│   |    └── Image.js
│   |    └── LocationCard.js
│   |    └── MainPage.js
│   |    └── NavBar.js
│   |    └── NavPage.js
│   |    └── Poulation.js
│   |    └── Stats.js
│   |    └── TeamCard.js
│   |    └── Weather.js
│   └──Pages
│   |   └── About.js
│   |   └── Home.js
│   |   └── Results.js
│   └── App.js
│   └── index.css
│   └── index.js
│   └── projects.json
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
└── tailwind.config.js
```
## Deployment

To view the application, please click [here](https://theglobetrotters.netlify.app)

## Badges

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)  


## License

Licensed under the [GPL](LICENSE.txt) license

## Credits
1. https://react-bootstrap.github.io/getting-started/introduction/
2. https://react-icons.github.io/react-icons
3. https://github.com/gitname/react-gh-pages




