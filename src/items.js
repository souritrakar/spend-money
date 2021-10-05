const items = [

    {
        name:"Cola Can",
        price:1,
        imagesrc:"https://sc04.alicdn.com/kf/Uefdaf774cdf54ed7a54feeb71de0acc9K/930601294/Uefdaf774cdf54ed7a54feeb71de0acc9K.png",
        quantity:0
    },
    {
        name:"Big Mac",
        price:2,
        imagesrc:"https://qph.fs.quoracdn.net/main-qimg-a8fa8bcd5e3b2f49bf093327b686b5fb",
        quantity:0
    },
    {
        name:"Book",
        price:20,
        imagesrc:"data:image/jpeg;base64,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",
        quantity:0
    },
    {
        name:"PC, Xbox, PlayStation Game",
        price:40,
        imagesrc:"data:image/jpeg;base64,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",
        quantity:0
    },
    {
        name:"Fancy Restaurant Meal",
        price:70,
        imagesrc:"https://dta0yqvfnusiq.cloudfront.net/lajol42158533/2018/12/image1-5c0553e0c2565.png",
        quantity:0
    },
   
    
    {
        name:"1 year of Spotify Premium",
        price:100,
        imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBmnbqB2U3X8Md-RvAGMGtm9syclTVXqIRA&usqp=CAU",
        quantity:0
    },
    {
        name:"Nike Air Max",
        price:125,
        imagesrc:"https://www.pngkit.com/png/full/140-1403696_off-white-x-air-max-97-menta-nike.png",
        quantity:0
    },
    {
        name:"Airpods",
        price:150,
        imagesrc:"https://www.freepnglogos.com/uploads/airpods-png/airpods-wireless-headphones-apple-indiaistore-4.png",
        quantity:0
    },
    {
        name:"Apple Stock",
        price:200,
        imagesrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png",
        quantity:0
    },
    {
        name:"1 night at 5-Star Hotel",
        price:300,
        imagesrc:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestravelguide%2Ffiles%2F2019%2F03%2FFORBES-5CountriesGetTheirFirstFive-StarHotels-CrockfordsAtResortsWorldGenting-CreditCrockfordsAtResortsWorldGenting.jpg",
        quantity:0
    },
    {
        name:"Playstation 5",
        price:500,
        imagesrc:"https://media.croma.com/image/upload/v1610108113/Croma%20Assets/Gaming/Gaming%20Consoles/Images/231644_fq1z6s.png",
        quantity:0
    },
   
    {
        name:"iPhone X",
        price:600,
        imagesrc:"https://neal.fun/spend/images/smartphone.jpg",
        quantity:0
    },
    {
        name:"Cycle",
        price:800,
        imagesrc:"https://neal.fun/spend/images/bike.jpg",
        quantity:0
    },
    {
        name:"Luxury Wine",
        price:4000,
        imagesrc:"https://neal.fun/spend/images/luxury-wine.jpg",
        quantity:0
    },

    {
        name:"Ultimate Gaming PC",
        price:5500,
        imagesrc:"https://www.cyberpowerpc.com/images/cs/onyxia2/cs-450-148_400.png",
        quantity:0
    },
    {
        name:"Diamond Ring",
        price:10000,
        imagesrc:"https://neal.fun/spend/images/diamond-ring.jpg",
        quantity:0
    },
    {
        name:"Rolex",
        price:12000,
        imagesrc:"https://neal.fun/spend/images/rolex.jpg",
        quantity:0
    },
    {
        name:"Mini Cooper",
        price:25000,
        imagesrc:"https://i.pinimg.com/originals/23/85/3c/23853cceb77791a7b99909ecc4c48c43.png",
        quantity:0
    },
    {
        name:"Tesla Model S",
        price:70000,
        imagesrc:"https://purepng.com/public/uploads/large/purepng.com-red-tesla-model-s-carcarvehicletransporttesla-961524655676zjjot.png",
        quantity:0
    },
    {
        name:"Lamborghini Car",
        price:250000,
        imagesrc:"https://pngimg.com/uploads/lamborghini/lamborghini_PNG10701.png",
        quantity:0
    },
    {
        name:"Family Home",
        price:300000,
        imagesrc:"https://neal.fun/spend/images/single-family-home.jpg",
        quantity:0
    },
    {
        name:"1 week in every country",
        price:800000,
        imagesrc:"https://i.imgur.com/CFjtIjN.jpg",
        quantity:0
    },
    {
        name:"Private Jet",
        price:3000000,
        imagesrc:"http://assets.stickpng.com/images/580b585b2edbce24c47b2d0c.png",
        quantity:0
    },
 
    
    {
        name:"NFL Advertisement",
        price:5000000,
        imagesrc:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png",
        quantity:0
    },
    {
        name:"Yacht",
        price:7000000,
        imagesrc:"https://neal.fun/spend/images/yacht.jpg",
        quantity:0
    },
    {
        name:"F1 Car",
        price:1500000,
        imagesrc:"https://neal.fun/spend/images/formula-1-car.jpg",
        quantity:0
    },
    {
        name:"Apache Helicopter",
        price:30000000,
        imagesrc:"https://neal.fun/spend/images/apache-helicopter.jpg",
        quantity:0
    },
    {
        name:"L.A Mansion",
        price:50000000,
        imagesrc:"https://photos.zillowstatic.com/fp/9333231725640b414bd5d4bff066501e-p_e.jpg",
        quantity:0
    },
    {
        name:"Hollywood Movie",
        price:100000000,
        imagesrc:"https://www.seekpng.com/png/full/434-4342333_film-reel-png-download-movie-film-reels-cufflinks.png",
        quantity:0
    },
    {
        name:"Boeing 747",
        price:150000000,
        imagesrc:"https://neal.fun/spend/images/boeing-747.jpg",
        quantity:0
    },
    {
        name:"Skyscraper",
        price:800000000,
        imagesrc:"https://static.wixstatic.com/media/2cd43b_536836a5f7234d03aa0da2d40741c7b4~mv2.png/v1/fill/w_170,h_285,q_90/2cd43b_536836a5f7234d03aa0da2d40741c7b4~mv2.png",
        quantity:0
        
    },
    {
        name:"Unicorn Company",
        price:1000000000,
        imagesrc:"https://kahanikidunia.com/wp-content/uploads/2020/10/unicorn-3868794_640-1.png",
        quantity:0
    },
    {
        name:"ESL Team",
        price:2000000000,
        imagesrc:"https://seeklogo.com/images/E/european-super-league-logo-0E23B01EA1-seeklogo.com.png",
        quantity:0
    },



]

export default items