//require db and any models
const { db } = require("./");

//require and data files to use in seeding

const seed = async () => {
  try {
    console.log(`Seeding started...`);
    await db.sync({ force: true });

    // ACCOUNTS EXAMPLE
    // const accountData = await getPeoples();
    // const accounts = await Promise.all(
    //   accountData.map((account) => Account.create(account))
    // );

    //ACCOUNTS
    const admin1 = await Account.create({
      fName: "Sarah",
      lName: "Admin",
      userName: "admin1",
      password: "password",
      email: "sarahAdmin@email.com",
      userType: "ADMIN",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://gist.github.com/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/sarahAvatar.png",
    });
    const admin2 = await Account.create({
      fName: "Robert",
      lName: "Admin",
      userName: "admin2",
      password: "password",
      email: "robertAdmin@email.com",
      userType: "ADMIN",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/RGL-avatar.svg",
    });

    const writer1 = await Account.create({
      fName: "Jeremy",
      lName: "Writer",
      userName: "writer1",
      password: "password",
      email: "jeremyWriter@email.com",
      userType: "WRITER",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/JPL-avatar.svg",
    });
    const writer2 = await Account.create({
      fName: "Lillian",
      lName: "Writer",
      userName: "writer2",
      password: "password",
      email: "lillianWriter@email.com",
      userType: "WRITER",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/LML-avatar.svg",
    });

    const user1 = await Account.create({
      fName: "Emilia",
      lName: "User",
      userName: "user1",
      password: "password",
      email: "emiliaUser@email.com",
      userType: "USER",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/ELL-avatar.svg",
    });
    const user2 = await Account.create({
      fName: "Victoria",
      lName: "User",
      userName: "user2",
      password: "password",
      email: "victoriaUser@email.com",
      userType: "USER",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/VFL-avatar.svg",
    });

    const user3 = await Account.create({
      fName: "Leo",
      lName: "User",
      userName: "user3",
      password: "password",
      email: "leoUser@email.com",
      userType: "USER",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus mauris vel erat pulvinar ultrices. Quisque diam tellus, efficitur quis enim ut, convallis fermentum sem. Maecenas et faucibus lectus. Vestibulum maximus non justo vel malesuada. Fusce non tempor augue. Sed eu fringilla mauris, a posuere risus. Nam et leo est.",
      profileImg:
        "https://raw.githubusercontent.com/gist/sllozier/60ba86e5e2eaa1816d19b2b74e9df67c/raw/2f651ce4ee4e82ac830461948a73e544d4c11041/LPL-avatar.svg",
    });

    //BLOG POSTS
    const post1 = await Post.create({
      title: "Post One",
      postImg:
        "https://static.wixstatic.com/media/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg",
      isPublished: true,
      isFeatured: true,
      content:
        "Toffee liquorice cake oat cake cheesecake gingerbread soufflé oat cake jelly. Jelly dragée cheesecake pastry marzipan chocolate bar sesame snaps sesame snaps sweet roll. Cupcake tootsie roll jujubes cupcake sesame snaps dragée. Fruitcake bonbon pastry topping ice cream jujubes gummi bears. Apple pie dragée candy cake cheesecake. Sweet chocolate bar bonbon dessert pie icing. Soufflé cupcake pie cheesecake halvah carrot cake sugar plum croissant marshmallow. Cupcake pudding sweet roll tootsie roll sesame snaps. Gummi bears tiramisu toffee icing cotton candy croissant topping carrot cake. Croissant candy canes sesame snaps lemon drops chocolate cake donut. Icing marshmallow liquorice biscuit lemon drops fruitcake. Croissant lemon drops cake cupcake gingerbread chocolate. Soufflé topping bonbon pie apple pie cheesecake oat cake. Cupcake chupa chups candy canes apple pie candy toffee sugar plum. Donut carrot cake gummies muffin muffin icing icing cheesecake. Jujubes carrot cake candy canes apple pie fruitcake chocolate. Tiramisu oat cake gummies cake ice cream powder cake lemon drops bear claw. Tiramisu chocolate bar donut cheesecake sweet roll cake danish caramels shortbread. Tootsie roll lollipop pastry wafer brownie lemon drops donut tootsie roll. Biscuit cupcake pudding muffin toffee dragée. Brownie cheesecake gummi bears powder tootsie roll candy cake. Bonbon croissant jelly tart pie jelly beans soufflé candy canes. Shortbread cheesecake donut gummies fruitcake tootsie roll cheesecake liquorice donut. Gummi bears marshmallow biscuit bonbon muffin liquorice. Cotton candy dragée ice cream marzipan cotton candy gummies. Bear claw biscuit marzipan brownie danish candy soufflé. Topping chocolate tiramisu fruitcake bonbon fruitcake. Halvah lemon drops icing jelly beans ice cream dragée bear claw cake wafer. Candy cheesecake powder jelly beans pie. Bonbon marzipan soufflé liquorice cupcake chocolate bar apple pie jelly beans. Cupcake sweet roll croissant tiramisu pudding. Chocolate dragée candy canes sweet dragée dessert gummies caramels shortbread. Gummies sweet roll sugar plum croissant donut donut soufflé. Topping candy cake marzipan sweet roll topping halvah. Muffin wafer pie gummi bears jelly beans cotton candy cheesecake cake. Halvah jelly beans shortbread halvah apple pie apple pie oat cake. Sesame snaps biscuit marshmallow chocolate bar soufflé. Danish pie donut dessert fruitcake. Sweet caramels jujubes brownie caramels. Wafer pie bonbon cookie chocolate. Soufflé topping biscuit wafer oat cake gummies brownie. Caramels fruitcake dessert soufflé cheesecake chupa chups. Liquorice sweet dragée lollipop danish pie. Sweet toffee cotton candy sweet jelly-o cake chocolate bar. Soufflé tart biscuit pastry sweet roll topping jelly candy canes bonbon. Chocolate candy canes wafer gummi bears sesame snaps chocolate bar donut toffee. Wafer wafer tart ice cream shortbread jujubes sugar plum jelly beans. Jelly-o bonbon halvah cake bonbon sweet chocolate bar topping. Jelly halvah caramels halvah macaroon sweet. Jelly beans pudding sugar plum sugar plum chupa chups. Topping chupa chups icing danish cheesecake dessert dessert cookie sugar plum. Gummi bears shortbread ice cream gummies jelly-o danish. Apple pie powder pastry cupcake cookie bonbon croissant soufflé icing. Carrot cake gummi bears lollipop sweet roll lollipop. Caramels jelly topping jelly-o dessert pie. Sesame snaps tart topping halvah pudding sweet roll lollipop cupcake. Marzipan gingerbread chocolate cake chocolate cake bonbon gummies macaroon chocolate bar shortbread. Shortbread toffee croissant caramels tart. Gummi bears pie macaroon chocolate bar jelly beans. Jelly-o carrot cake toffee chocolate bar candy canes. Carrot cake muffin lemon drops gummi bears chocolate bar. Oat cake tart jelly-o gummies marshmallow shortbread bear claw jelly beans. Lollipop cake jelly marzipan lemon drops biscuit. Chupa chups jelly-o liquorice cheesecake chupa chups topping donut carrot cake. Cake tiramisu candy tiramisu lemon drops brownie. Cupcake jujubes danish tart lemon drops macaroon gingerbread.",
      publishedDate: new Date(),
      totalCharacters: 3528,
      writerId: 1,
    });

    const post2 = await Post.create({
      title: "Post Two",
      postImg:
        "https://static.wixstatic.com/media/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg",
      isPublished: true,
      isFeatured: false,
      content:
        "Powder cake lemon drops jelly-o danish donut cake tootsie roll. Chocolate bar macaroon cupcake gingerbread jelly beans ice cream sweet roll. Icing chupa chups icing toffee candy canes sweet roll pie jelly beans donut. Icing lemon drops biscuit pudding pie icing chocolate bar. Carrot cake gingerbread candy sesame snaps wafer liquorice powder pastry danish. Tootsie roll chocolate cake pie liquorice soufflé. Candy brownie carrot cake marzipan pudding gummi bears carrot cake tart topping. Candy shortbread chocolate bar dessert dragée chocolate dragée carrot cake cotton candy. Lollipop powder jelly-o carrot cake sweet roll donut soufflé icing. Brownie dragée powder cookie lemon drops. Bonbon wafer lemon drops caramels oat cake. Liquorice liquorice chocolate bar biscuit gummies apple pie. Gingerbread croissant caramels marshmallow sugar plum. Sugar plum biscuit sweet fruitcake sugar plum sugar plum chocolate bar apple pie donut. Gummi bears lollipop dragée dessert lemon drops tootsie roll wafer tart. Dragée ice cream soufflé macaroon chocolate cake donut cotton candy jujubes ice cream. Candy toffee caramels sweet roll caramels lemon drops cake caramels. Oat cake chupa chups cotton candy chupa chups candy. Tart dessert liquorice bonbon dessert fruitcake tart. Jelly-o bear claw cake sesame snaps toffee cake lemon drops. Chocolate cake dessert powder donut biscuit. Tart macaroon chocolate cake jelly beans gummies cheesecake chupa chups bonbon chocolate cake. Icing chocolate bar jelly-o tootsie roll jelly beans. Gingerbread jelly jelly-o dragée bonbon gummi bears tootsie roll sugar plum caramels. Candy canes marzipan liquorice sugar plum pie halvah marzipan cotton candy. Sweet roll jelly beans caramels pie jelly wafer chocolate. Candy marzipan sweet lollipop bonbon sweet cheesecake. Cheesecake marzipan ice cream oat cake toffee halvah. Pudding croissant sesame snaps chupa chups icing chocolate cake jelly-o cupcake topping. Sesame snaps lollipop jujubes liquorice lollipop wafer ice cream cake toffee. Cupcake tootsie roll cake sweet roll gummies caramels cake sesame snaps chupa chups. Pudding tootsie roll dessert soufflé gummi bears danish brownie. Chocolate bar oat cake shortbread jujubes shortbread. Chocolate bear claw caramels powder chocolate cake liquorice. Muffin brownie cotton candy sesame snaps dragée toffee. Macaroon tart wafer gummies cake. Bonbon sesame snaps sesame snaps chupa chups halvah cotton candy dessert soufflé biscuit. Halvah gummi bears bonbon jelly candy canes candy halvah. Toffee tiramisu brownie sweet roll oat cake jelly beans. Liquorice chocolate cake ice cream dragée apple pie jelly. Tart dessert cookie pastry tiramisu muffin bear claw. Jelly beans pie marshmallow dessert jelly beans soufflé dessert muffin. Jelly beans icing jelly jelly-o chocolate cake marzipan jelly beans jelly bear claw. Croissant topping wafer lemon drops cupcake chupa chups donut. Biscuit bonbon jelly fruitcake croissant brownie dragée cake. Cotton candy cheesecake shortbread gummi bears brownie caramels. Jelly beans cupcake sweet croissant icing bonbon. Danish sweet roll powder soufflé cheesecake soufflé cookie. Fruitcake jelly beans dessert apple pie liquorice gingerbread. Toffee wafer candy canes candy canes gummies cake jelly beans soufflé shortbread. Halvah cake marzipan carrot cake chocolate cake cookie cake pie. Lemon drops sweet pie pie sesame snaps. Jujubes toffee cheesecake carrot cake biscuit lemon drops tiramisu icing chocolate. Chocolate fruitcake jelly jelly brownie fruitcake. Sweet marzipan cotton candy pie ice cream danish cotton candy gummies. Marzipan marshmallow sweet apple pie marshmallow cotton candy apple pie candy canes oat cake. Tootsie roll jujubes cupcake sesame snaps toffee jelly cupcake marshmallow. Lollipop gummi bears muffin gummi bears apple pie jelly beans cotton candy. Halvah caramels dragée muffin carrot cake. Wafer lemon drops ice cream candy halvah chocolate bar gingerbread. Cupcake jelly-o sweet roll topping dessert tiramisu. Gummi bears chocolate bar cake cookie halvah gingerbread candy tootsie roll muffin. Marzipan halvah chupa chups tiramisu biscuit wafer jujubes chocolate cake gummi bears. Wafer lollipop sesame snaps sugar plum chocolate bar marshmallow macaroon dessert dragée. Caramels powder jelly beans dessert fruitcake soufflé cotton candy candy. Ice cream apple pie gingerbread chocolate tootsie roll sesame snaps pastry. Candy canes powder wafer jelly-o caramels jujubes cookie. Danish bonbon toffee ice cream jelly fruitcake candy gingerbread. Tart sweet lemon drops sweet roll jelly. Pastry cake wafer apple pie gummies liquorice lemon drops liquorice chocolate. Cookie brownie sesame snaps caramels pie carrot cake soufflé. Candy canes cake danish marshmallow jelly. Sweet roll marzipan jelly tiramisu gummies danish toffee cookie. Soufflé jelly-o danish chocolate icing candy donut. Pie topping sesame snaps candy jelly jujubes pudding. Cake candy canes topping pudding pie chocolate tart sugar plum chupa chups. Fruitcake gummies muffin pie toffee tart cheesecake chocolate halvah. Bonbon jujubes pudding pie dragée cupcake cookie caramels apple pie.",
      publishedDate: new Date(),
      totalCharacters: 4428,
      writerId: 2,
    });
    const post3 = await Post.create({
      title: "Post Three",
      postImg:
        "https://static.wixstatic.com/media/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/37bc4e_533acc42ab994e9ba459a991e92e78ef~mv2.jpeg",
      isPublished: false,
      isFeatured: false,
      content:
        "Apple pie caramels jelly beans jelly-o dragée. Danish fruitcake muffin fruitcake gummies. Carrot cake dragée wafer dessert halvah candy canes. Jujubes apple pie cupcake bonbon chocolate bar chupa chups. Jelly beans sweet roll cotton candy tiramisu toffee marzipan brownie chocolate. Apple pie donut cheesecake pudding sesame snaps tiramisu bear claw sugar plum. Jelly-o pastry dessert fruitcake gingerbread tootsie roll dessert croissant. Liquorice croissant marshmallow tiramisu candy canes caramels jujubes. Tiramisu dragée tootsie roll powder wafer pie chocolate cake. Gummies lemon drops pie brownie lemon drops muffin lemon drops candy canes cake. Chupa chups bear claw lemon drops sweet roll liquorice sesame snaps tiramisu. Candy canes cake ice cream oat cake jelly beans gingerbread chocolate bar. Jelly beans cheesecake sweet candy chocolate wafer wafer dragée. Croissant bear claw chocolate sweet roll icing. Liquorice gummies icing chocolate cotton candy. Lollipop jelly-o jelly-o caramels marzipan. Danish apple pie sweet roll lemon drops cake powder. Gingerbread sesame snaps tart tootsie roll marshmallow tiramisu cake muffin cake. Jelly beans liquorice gingerbread danish icing. Bear claw cheesecake cake wafer candy canes fruitcake. Marzipan oat cake sweet cake sweet roll cupcake pastry sweet gummies. Jujubes dessert oat cake lollipop bonbon cotton candy toffee. Chocolate bar jelly icing soufflé sugar plum gingerbread jelly cake chocolate. Chupa chups caramels cookie sesame snaps gummies tart liquorice. Dessert candy cake icing biscuit croissant tiramisu. Croissant soufflé candy toffee chocolate bar cookie tart apple pie. Candy marzipan candy canes shortbread pie lemon drops pie bear claw fruitcake. Croissant apple pie dessert oat cake tootsie roll. Pie bear claw croissant chocolate cake marzipan. Dessert biscuit caramels bear claw wafer. Donut cupcake biscuit dragée chocolate candy halvah. Sesame snaps soufflé powder brownie fruitcake caramels cake. Dragée macaroon cookie cake icing muffin lemon drops donut. Toffee icing tart wafer shortbread. Chocolate cake chocolate bar apple pie marzipan wafer cotton candy dessert soufflé. Jelly-o shortbread jelly beans tiramisu pie tart chocolate bar caramels cake. Gummies candy canes cupcake cotton candy shortbread lemon drops bear claw chocolate cake. Gummi bears cupcake cake apple pie jujubes marshmallow bear claw. Sweet powder caramels tootsie roll carrot cake carrot cake lemon drops carrot cake halvah.",
      publishedDate: new Date(),
      totalCharacters: 2131,
      adminId: 1,
    });

    //BLOG POST COMMENTS
    await Comment.create({
      text: "Wow! I learned so much from this!",
      userId: 1,
      postId: 1,
    });
    await Comment.create({
      text: "Very insightful. Thank you!",
      userId: 2,
      postId: 2,
    });
    await Comment.create({
      text: "This really challenged me to pray more.",
      userId: 3,
      postId: 3,
    });
    await Comment.create({
      text: "Can't wait to read more of these!",
      userId: 1,
      postId: 3,
    });

    //EVENTS
    await Event.create({
      name: "Church Picnic",
      description:
        "An opportunity to come together as a church family before the school year begins!",
      eventImg:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/240446574_4216828298425240_8540314566552794494_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AumuarQADfUAX-jWgiY&_nc_ht=scontent-lga3-2.xx&oh=00_AfCkmCyh-tLLCn1Suxw1yF8ry4iexJNKgefTL0zKOtOwGg&oe=648B8904",
      pinUrl: "https://goo.gl/maps/nB11cCM2u16PdeM77",
      pocName: "Sarah",
      pocEmail: "sarahAdmin@email.com",
      pocPhone: "123-456-7899",
      eventDate: "2023-08-19",
      isPosted: true,
    });
    await Event.create({
      name: "Baptism",
      description:
        "Proclaim that Jesus is your Lord and Savior this week at Little Ossipee through water baptism!",
      eventImg:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/13892255_1018056758302426_3239739578979323041_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=j1DWwszwersAX8gjvNL&_nc_ht=scontent-lga3-1.xx&oh=00_AfA7Zi3oNswr6rgzHMLDBeX09hGiro6b160wOmXgf6Ismw&oe=64AEC875",
      pinUrl: "https://goo.gl/maps/oxRbqhHq82X3GHa57",
      pocName: "Jeremy",
      pocEmail: "jeremyWriter@email.com",
      pocPhone: "123-456-7899",
      isPosted: false,
    });

    //Products
    await Product.create({
      name: "Sticker",
      price: 1.0,
      stock: 20,
      image: "",
    });
    await Product.create({
      name: "The Deeper Well Church Cookbook",
      price: 1.0,
      stock: 20,
      image:
        "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/191430613_3967579570016782_6408018220741610493_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Aum0ZZliIvoAX9Hisht&_nc_ht=scontent-lga3-2.xx&oh=00_AfCzfiYhQ02XhETFd-F3TamcF6H4j2CvKcG_EDoNyALE7g&oe=64AEDDD8",
      category: books,
    });

    console.log(
      `Seeding successful!`
      //" Special Methods Check :", Object.keys("Model".prototype),
    );
  } catch (error) {
    console.log(`Seeding Problem! Error in seed Function: ${error}`);
  }
};
const runSeed = async () => {
  console.log(`Start seeding...`);
  try {
    await seed();
  } catch (error) {
    console.error("RUN SEED ERROR", error);
    process.exitCode = 1;
  } finally {
    console.log(`closing db connection`);
    await db.close();
    console.log(`db connection closed`);
  }
};

if (module === require.main) {
  runSeed();
}

module.exports = seed;
