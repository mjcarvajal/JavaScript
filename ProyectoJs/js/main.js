$(document).ready(function(){
    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
    });

    // Posts
    var posts =[
        {
            title: "Prueba de titulo 1",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."
        },
        {
            title: "Prueba de titulo 2",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."
        },
        {
            title: "Prueba de titulo 3",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."            
        },
        {
            title: "Prueba de titulo 4",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."
        },
        {
            title: "Prueba de titulo 5",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."
        },
        {
            title: "Prueba de titulo 6",
            date: 'Publicado el dia: '+moment().day()+' de '+moment().format("MMMM")+' Del '+moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum id diam eget tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et magna luctus, scelerisque erat ut, ultrices justo. Nam non imperdiet nulla. Nulla diam lorem, eleifend nec dolor quis, rutrum facilisis ante. Vivamus nec arcu et arcu venenatis condimentum. Pellentesque lobortis, sem eu mattis porttitor, ligula ligula iaculis augue, at bibendum orci turpis vitae nunc. Vivamus fringilla at massa quis tincidunt. Duis euismod nunc ac nisi mattis placerat. Ut lacinia hendrerit nibh et aliquam. Quisque eget bibendum diam, nec dapibus nunc."
        },
    ];

    posts.forEach((item, index) =>{
        var post = `
        <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.content}</p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
        `;
        $("#posts").append(post);
    });
});