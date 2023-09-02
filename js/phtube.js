
//categories

const handleMyPhTubeCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    // console.log(data.data);

    const myPhtubeTabContainer = document.getElementById('myphtube-tab-container');

    data.data.forEach((phtubeCategory) => {

        const div = document.createElement('div');
        div.innerHTML = `
            <a onclick="handleMyPhTubeElements('${phtubeCategory.category_id}')" class="tab tab-active hover:bg-lime-200 font-semibold">${phtubeCategory.category}</a>
        `;
        myPhtubeTabContainer.appendChild(div);
    })
};

//Category Id

const handleMyPhTubeElements = async (phtubeCategoryId) => {

    // console.log(phtubeCategoryId);

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${phtubeCategoryId}`);
    const data = await response.json();

    const noContentContainer = document.getElementById('no-content-container');

    if (data.data.length === 0) {
        noContentContainer.classList.remove('hidden')
    }
    else {
        noContentContainer.classList.add('hidden')
    }


    const myPhtubeCardContainer = document.getElementById('myphtube-card-container');
    myPhtubeCardContainer.innerHTML = "";

    data.data?.forEach((phtubeElements) => {

        // console.log(phtubeElements.authors[0].verified);
        const verificationBlueTickMark = phtubeElements.authors[0].verified;

        // console.log(phtubeElements.others.posted_date);
        let postDateSeconds = phtubeElements.others.posted_date;
        let postDateHours = Math.floor(postDateSeconds / 3600);
        let postDateMinutes = Math.floor((postDateSeconds % 3600) / 60);
        let timeInHoursMinutes = `${postDateHours > 0 ? postDateHours + ' ' + 'hrs' : ''} ${postDateMinutes > 0 ? postDateMinutes + ' ' + 'min' + ' ' + 'ago' : ''}`;
        // console.log(timeInHoursMinutes);

        const div = document.createElement('div');
        div.innerHTML = `
        <div id="card-container" class="card w-72 h-96 bg-base-100 shadow-xl">
            <figure><img src=${phtubeElements?.thumbnail} alt="thumbnail-image" /></figure>
            <p class="text-right -my-4 bg-[#171717] text-white p-2">${timeInHoursMinutes}</p>
            <div class="card-body">

                <div class="flex flex-row">
                    <img class="w-1/3 rounded-full mr-2" src=${phtubeElements?.authors[0]?.profile_picture} alt="author-image">
                    <h2 class="card-title">${phtubeElements?.title}</h2>
                </div>

                <div class="flex flex-row">
                    <p>${phtubeElements?.authors[0]?.profile_name}</p>
                    <div>
                    ${verificationBlueTickMark === true ? '<img src="./images/bluetick.svg" alt="blue-tick"/>' : ''}
                    </div>
                </div>

                <p>${phtubeElements?.others?.views} views</p>
            
            </div>
        </div>
            
        `;

        myPhtubeCardContainer.appendChild(div);

    });

}

//Sort by view 

const handlePhtubeSortByViews = async (phtubeCategoryId) => {

    // console.log(phtubeCategoryId);

    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${phtubeCategoryId}`);
    const data = await response.json();



    const sortByViewsOfPhtube = data.data;
    // console.log(sortByViewsOfPhtube);
    sortByViewsOfPhtube.sort((a, b) => {
        const viewsA = parseFloat(a.others.views)
        const viewsB = parseFloat(b.others.views)
        return viewsB - viewsA;
    });
    // console.log(sortByViewsOfPhtube);


    const myPhtubeCardContainer = document.getElementById('myphtube-card-container');
    myPhtubeCardContainer.innerHTML = "";

    sortByViewsOfPhtube.forEach((sortedViews) => {
        // console.log(sortedViews.others.views);

        // console.log(phtubeElements.authors[0].verified);
        const verificationBlueTickMark = sortedViews.authors[0].verified;

        // console.log(phtubeElements.others.posted_date);
        let postDateSeconds = sortedViews.others.posted_date;
        let postDateHours = Math.floor(postDateSeconds / 3600);
        let postDateMinutes = Math.floor((postDateSeconds % 3600) / 60);
        let timeInHoursMinutes = `${postDateHours > 0 ? postDateHours + ' ' + 'hrs' : ''} ${postDateMinutes > 0 ? postDateMinutes + ' ' + 'min' + ' ' + 'ago' : ''}`;
        // console.log(timeInHoursMinutes);

        const div = document.createElement('div');
        div.innerHTML = `
            <div id="card-container" class="card w-72 h-96 bg-base-100 shadow-xl">
                <figure><img src=${sortedViews?.thumbnail} alt="thumbnail-image" /></figure>
                <p class="text-right -my-4 bg-[#171717] text-white p-2">${timeInHoursMinutes}</p>
                <div class="card-body">
    
                    <div class="flex flex-row">
                        <img class="w-1/3 rounded-full mr-2" src=${sortedViews?.authors[0]?.profile_picture} alt="author-image">
                        <h2 class="card-title">${sortedViews?.title}</h2>
                    </div>
    
                    <div class="flex flex-row">
                        <p>${sortedViews?.authors[0]?.profile_name}</p>
                        <div>
                        ${verificationBlueTickMark === true ? '<img src="./images/bluetick.svg" alt="blue-tick"/>' : ''}
                        </div>
                    </div>
    
                    <p>${sortedViews?.others?.views} views</p>
                
                </div>
            </div>
                
            `;

        myPhtubeCardContainer.appendChild(div);

    });

}

handleMyPhTubeCategories();
handleMyPhTubeElements("1000");
handlePhtubeSortByViews();
