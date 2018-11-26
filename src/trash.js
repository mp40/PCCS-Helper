// https://appdividend.com/2017/07/22/react-firebase-tutorial/

// var config = {
//   apiKey: "AIzaSyB9iiSxVGMV5IHczyn-CWlk0JTXSbQqhjk",
//   authDomain: "my-appbs.firebaseapp.com",
//   databaseURL: "https://my-appbs.firebaseio.com",
//   projectId: "my-appbs",
//   storageBucket: "my-appbs.appspot.com",
//   messagingSenderId: "1002150771449"
// };
// firebase.initializeApp(config);

// class App extends Component {
//   constructor(props) {
//     super(props);
//     var config = {
//       apiKey: "AIzaSyB9iiSxVGMV5IHczyn-CWlk0JTXSbQqhjk",
//       authDomain: "my-appbs.firebaseapp.com",
//       databaseURL: "https://my-appbs.firebaseio.com",
//       projectId: "my-appbs",
//       storageBucket: "my-appbs.appspot.com",
//       messagingSenderId: "1002150771449"
//     };
//     firebase.initializeApp(config);
//   }

// componentWillMount() {
//   this.beerRef = base.syncState('songs', {
//     context: this,
//     state: 'beer'
//   });
// }

// componentWillUnmount() {
//   base.removeBinding(this.beerRef)
// }
// db.ref()//tablename
// ref.get()

// export default App;

// class LotteryForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "no email",
//       avatar: null,
//       isFormSubmitted: false,
//     };
//   }

//   componentDidMount() {
//     const url = "https://source.unsplash.com/random";
//     fetch(url)
//       .then(response => {
//         const pictureURL = response.url;
//         this.setState({
//           avatar: pictureURL,
//         })
//       });
//   }