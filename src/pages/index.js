import React, {useState, useCallback, useEffect} from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import {Helmet} from "react-helmet";

// import screen3 from "../svg/iphone.png"
import screen1 from "../svg/first.png"
import screen2 from "../svg/skip.png"

const texts = [
	"while paying rent.",
  "while paying rent.",
  "while paying rent.",
];  

const names = [
 'Skip a month\'s rent', "Get Cashback"
]

const Texts = (props) => {
	const [state, setState] = React.useState({
		left: '', right: '', texts: props.texts, current: props.texts[0]
	});
	const stay = React.useRef(false);
	const staybt = React.useRef(false);
	const update = React.useCallback(() => {
		const addNextChar = () => {
			setState({ ...state,
					  left: state.left + state.texts[0].slice(0, 1),
					  right: state.texts[0].slice(1),
					  texts: state.texts.map((e, i) => i === 0 ? e.slice(1) : e)
					 });
		};
		const deleteLastChar = () => {
			if (state.left.slice(0, -1) === '') { stay.current = true; staybt.current = true;}
			setState({ ...state,
					  left: state.left.slice(0, -1),
					  right: state.left.slice(-1) + state.right
					 });
		}
		const switchToNextText = () => {
			stay.current = false;
			staybt.current = false;
			const nextText = state.texts[1];
			setState({ ...state,
					  left: nextText.slice(0, 1), // first char of next text
					  right: nextText.slice(1), // rest of the next char
					  texts: [
						  ...state.texts.slice(1).map((e, i) => i === 0 ? e.slice(1) : e),
						  state.current
					  ],
					  current: nextText
					 });
		}
		if (state.texts[0].length === 0) {
			stay.current = false;
			if (state.left === '') switchToNextText();
			else deleteLastChar();
		} else addNextChar();
	}, [stay, staybt, setState, state]);
	React.useEffect(() => {
		setTimeout(() => {
			if (state.texts[0].length === 1) stay.current = true;
			window.requestAnimationFrame(update);
		}, stay.current ?
				   staybt.current ? props.waitbt || 30 : props.wait || 3000
				   : props.speed || 30);
	}, [update]);
	return <span className={props.className}>{state.left}<span>{state.right}</span></span>
};

const Index = () => {
  const [newName, setnewName] = useState("Get Cashback");
  // let ind ex = 0
  
    const shuffle = useCallback(() => {
        
              const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(
          // for(let i = 1; i<names.length; i++){
          //   index=i
          // }
          shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])
//   React.useEffect(()=>{
//     var words = document.getElementsByClassName('word');
// var wordArray = [];
// var currentWord = 0;

// words[currentWord].style.opacity = 1;
// for (var i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }

// function changeWord() {
//   var cw = wordArray[currentWord];
//   var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   for (var i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }
  
//   for (var i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }
  
//   currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
// }

// function animateLetterOut(cw, i) {
//   setTimeout(function() {
// 		cw[i].className = 'letter out';
//   }, i*80);
// }

// function animateLetterIn(nw, i) {
//   setTimeout(function() {
// 		nw[i].className = 'letter in';
//   }, 340+(i*80));
// }

// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }
  
//   wordArray.push(letters);
// }

// changeWord();
// setInterval(changeWord, 4000);


//   },[]),
return(
  <Layout>
    <Helmet>
    <script src="//embed.typeform.com/next/embed.js"></script>
    </Helmet>
    <section className="pt-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left w-full">
          {/* <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your landing page
          </h1> */}
          {/* <div class="text">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
              Atlas helps renters
            </h1>
            <p>
              <span class="word wisteria"> Earn. </span>
              <span class="word belize"> Save.</span>
              <span class="word pomegranate"> Rent.</span>
            </p>
          </div> */}
{/* 
<div class="content">
  <div class="content__container">
    <p class="content__container__text">
      Hello
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">world !</li>
      <li class="content__container__list__item"> while paying rent !</li>
      <li class="content__container__list__item">users !</li>
      <li class="content__container__list__item">everybody !</li>
    </ul>
  </div>
</div> */}
          <h2 className="header-text">
            {newName}
          </h2>
          <Texts className={'texts'} waitbt={50} wait={2000} speed={27} texts={texts}/>
          <p className="mt-8 md:mt-12">
            {/* 
              ** @todo to point to typeform 
            */}
            <Button size="lg" className="hover:bg-yellow-dark"><a href="#" className="text-white hover:text-white" data-tf-popup="oxc6Y5MX" data-tf-iframe-props="title=Atlas: Cash back each month you pay rent! " data-tf-medium="snippet" >Get Started</a></Button>
          </p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 pb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="font-semibold text-2xl mb-100"> Get Cash Back Monthly </h3>
              <img src = {screen1} style={{width: "100%", height: "600px", objectFit: "cover", objectPosition: "50% 0"}}/>
              <p className="mt-4 text-xl">
              Get rewarded for paying rent. Earn points towards a free month of rent every month you pay rent through Atlas.
                {/* An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer. */}
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="font-semibold text-2xl mb-100"> Skip a Month When You Need It </h3>
              <p className="mt-4 text-xl">
              <img className="w-full" src = {screen2} style={{width: "100%", height: "600px", objectFit: "cover", objectPosition: "50% 0"}}/>
                {/* An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer. */}
                Skip a month of rent when you need to and pay it back over 3 months.
                <br/>
              </p>
            </Card>
          </div>
          {/* <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
    
              </p>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
   
<section id="testimonials" className="py-10 lg:py-5">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What renters are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>

    </section>
    {/* <section id="stats" className="py-20 lg:pt-32">
     
    </section>  */}
    {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    </section>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> */}
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to earn points towards a free month of rent?</h3>
      {/* <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p> */}
      {/* @todo add waitlist typeform */}
      <p className="mt-8">
        <Button size="xl" className="hover:bg-white" ><a href="#" className="text-white hover:text-white" data-tf-popup="oxc6Y5MX" data-tf-iframe-props="title=Atlas: Cash back each month you pay rent! " data-tf-medium="snippet" >Get Started Now </a></Button>
      </p>
    </section>
  </Layout>)
};

export default Index;
