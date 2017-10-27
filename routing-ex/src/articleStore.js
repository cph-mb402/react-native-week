class ArticleStore {
    
      constructor() {
        this._articles = [
			{
				id: "1",
				title: "How to handle state in React. The missing FAQ.",
				author: "Osmel Mora",
				url: "https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c",
				img: "https://cdn-images-1.medium.com/max/800/1*Wor758rhYxwFuMU9V65qmw.jpeg"
			},
			{
				id: "2",
				title: "You might not need React Router",
				author: "Konstantin Tarkus",
				url: "https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d",
				img: "https://cdn-images-1.medium.com/max/800/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png"
			},
			{
				id: "3",
				title: "Mixins Considered Harmful",
				author: "Dan Abramov",
				url: "https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html",
				img: "https://i.imgur.com/XemDUw8.jpg"
			},
			{
				id: "4",
				title: "React Design Principles",
				author: "Dan Abramov",
				url: "https://facebook.github.io/react/contributing/design-principles.html",
				img: "https://cdn-images-1.medium.com/max/2000/1*J5XOQh2WKIl0NFTAMvcVbQ.png"
			},
			{
				id: "5",
				title: "Don't use .bind() when passing props",
				author: "Dave Ceddia",
				url: "https://daveceddia.com/avoid-bind-when-passing-props/",
				img: "https://daveceddia.com/images/no-bind-props.png"
			},
			{
				id: "6",
				title: "A Simple React Router v4 Tutorial",
				author: "Paul Sherman",
				url: "https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf",
				img: "https://cdn-images-1.medium.com/max/800/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png"
			},
			{
				id: "7",
				title: "Managing state and forms with React. Part 1",
				author: "Vlad Balin",
				url: "https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112",
				img: "https://frontendmasters.com/assets/react-ecosystem2.png"
			},
			{
				id: "8",
				title: "An iOS Developer on React Native",
				author: "Chalk and Chisel",
				url: "https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0",
				img: "https://cdn-images-1.medium.com/max/1600/1*vRfb-8tgqdwiI0dYopJRfw.jpeg"
			},
			{
				id: "9",
				title: "React Binding Patterns: 5 Approaches for Handling `this`",
				author: "Cory House",
				url: "https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56",
				img: "https://cdn-images-1.medium.com/max/1000/1*Brf51FVp5subpavq4ax8ow.jpeg"
			},
			{
				id: "10",
				title: "React Native — building app hell fast (first impressions)",
				author: "Marek Piechut",
				url: "https://reallifeprogramming.com/react-native-first-impressions-de3071e8fc41",
				img: "https://camo.githubusercontent.com/c8ed2a89d1e3f2c28dc46bc1b918b9b874ca18c3/687474703a2f2f692e696d6775722e636f6d2f555872475465472e706e67"
			}
		]
        this._nextID= 5;
      }
      get articles(){
        return this._articles;
      }
      addArticle(article){
        article.id = this._nextID;
        this._books.push(article);
        this._nextID++;
      }
      removeArticle(id){
        const articles = this._articles;
        const removeIndex = articles.map((article =>{
          return article.id
        })).indexOf(id);
        articles.splice(removeIndex,1);
      }
    }

let articleStore = new ArticleStore();
console.log(articleStore);
export default articleStore;