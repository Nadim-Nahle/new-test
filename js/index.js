window.addEventListener('load', (event) => {

    const cards = document.getElementById('card');
    const filterBtns = document.querySelectorAll('.category');

    axios({
        method: 'get',
        url: 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true',
    }).then(function (res) {
        data = res.data;
        len = data.length
        for (i = 0; i < len; i++) {

            const categories = document.createElement('div');
            categories.classList.add("categories");

            const card = document.createElement('div');
            card.classList.add("card");

            const initials = document.createElement('div');
            initials.classList.add("initials");
            const fnameInitial = document.createElement('h1');
            const lnameInitial = document.createElement('h1');

            const cardInfo = document.createElement('div');
            cardInfo.classList.add("card-info");
            const fname = document.createElement('h1');
            const lname = document.createElement('h1');

            const category = document.createElement('div');
            category.classList.add('card-category')
            const categoryName = document.createElement('h3');
            categoryName.classList.add('category-content')


            cards.appendChild(card);


            card.appendChild(initials);
            card.appendChild(cardInfo);
            card.appendChild(category);


            initials.appendChild(fnameInitial);
            initials.appendChild(lnameInitial);

            cardInfo.appendChild(fname);
            cardInfo.appendChild(lname);

            category.appendChild(categoryName);




            categoryName.innerHTML = data[i].category;
            fname.innerHTML = `${data[i].fname}&nbsp`;
            lname.innerHTML = data[i].lname;
            fnameInitial.innerHTML = data[i].fname[0];
            lnameInitial.innerHTML = data[i].lname[0];

        }

        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                let filter = e.currentTarget.dataset.id;
                const newCard = document.querySelectorAll('.card');
                const categoryName = document.querySelectorAll('.category-content');
                let divLen = newCard.length
                for (i = 0; i < divLen; i++) {
                    newCard[i].style.display = 'none'
                    if (categoryName[i].innerHTML == filter) {
                        newCard[i].style.display = 'flex'
                    }
                }

            })
        })
    })


    //add event listener



})