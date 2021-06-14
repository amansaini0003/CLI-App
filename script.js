var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log

log(chalk.green.bgRed("Welcome to Aman's Quiz on Indian Food\n"));
var userName = readLineSync.question('May I have your name please ? \n');


var response = readLineSync.question( "\n" + userName + ", are you ready to begin the quiz ? (yes/no)\n");

if(response.toUpperCase() == "NO")console.log("Please give it a try....Thanks.\n");

var score = 0;

function playQuiz(currQues){
		var userAns = readLineSync.question(currQues.question);
			log(chalk.cyan(`You answered : ${userAns}`));
		
		if(userAns.toUpperCase() == currQues.answer.toUpperCase()){
			log(chalk.green("Right answer\n"));
			score++;
		}
		else{
			score--;
			log(chalk.red("Wrong answer"));
			log(chalk.green("Correct answer is : " + currQues.answer + "\n"));
		}
		log(chalk.bgMagenta(currQues.fact + "\n"));
		log(chalk.bgBlue.bold(`Current Score is : ${score}`));
		log(`\n---------------------------\n`);
}

var questionList = [

		{
			question : `\n1. This sweet is made from deep-fried, thick sugar syrup and shaped into a large, pretzel-like shape, usually orange in color.\n a) Gajar ka halwa \n b) Jalebi \n c) Bhakarwadi \n d) Rasgulla \n`,
			answer : "b",
			fact : "Jalebi is a common sweet in India, Pakistan and Bangladesh. It can be yellow or orange in color."
		},

		{
			question : `2. This South Indian curry is prepared mainly with the juices of tamarind or tomato along with a few spices.\n a) Sambhar \n b) Raita \n c) Kadi \n d) Rasam \n`,
			answer : "d",
			fact : "Rasam is commonly consumed with rice. It is extremely popular with all states of South India."
		},
		
		{
			question : `3. Which of these is a popular dish from the Udupi cuisine?\n a) Dosa \n b) Wada \n c) Poha \n d) Puri \n`,
			 answer : "a",
			 fact : "Idli and dosa are the most popular dishes from the Udupi cuisine. They are very common in metros like Mumbai as fast food."
		},
		
		{
			question : `4. The Hyderabadi cuisine is a blend of which of the following cuisines?\n a)  Aryan, Vedic and Mughlai \n b)  Mughlai, Lucknowi and Persian \n c) Mughlai, Aryan and Persian \n d) Assamese, Persian and Lucknowi \n`,
			 answer : "b",
			 fact : "Hyderbadi Biryani is considered to be one of the best variations of the Biryani. The city of Hyderabad has strong Mughal influences and also has a substantial Islamic population."
		},
		
		{
			question : `5. Which of these is an important ingredient of South Indian cooking?\n a) Curd\n b) Lassi \n c) Gingelli \n d) Ghee \n`,
			 answer : "c",
			 fact : "North Indian cooking prefers peanut oil over the sesame oil (gingelli) used in South Indian cooking. Ghee is clarified butter and is commonly prepared in Indian households."
		},
		
		{
			question : `6. What is the main ingredient of chapati?.\n a)  Wheat flour\n b)  Moong dal flour \n c) Rice flour \n d) Udat dal flour \n`,
			 answer : "a",
			 fact : "Chapati may also contain other grains like bajra and jowar. Chapatis are usually round and thin and vary in sizes. They are usually served with ghee on top and commonly consumed with pulses and vegetables."
		},
		
		{
			question : `7. This fast food commonly eaten in Maharashtra, resembles a burger.\n a) Samosa \n b) Kathi roll \n c) Vada Pav \n d) Frankie \n`,
			 answer : "c",
			 fact   : `Vada Pav is commonly called the "Indian Burger". It is one of the most popular fast food on the streets of Mumbai. It consists of a potato cutlet sandwiched between a pao (a type of small, square bread).`
		},
		
		{
			question : `8. This dish is made of red kidney beans with assorted spices. It is a delicacy of North India.\n a) Rajma \n b) Moong dal \n c) Chana dal \n d) Kheer \n`,
			 answer : "a",
			 fact   : "Rajma is made of red kidney beans and can be served with rice or chapati."
		},
		
		{
			question : `9. What is a bhatura?\n a)  A type of egg soup \n b) A type of dal with mixed pulses \n c) A type of bread \n d)  A type of utensil used in North Indian cooking\n`,
			 answer : "c",
			 fact   : "A bhatura resembles a puri. However, it is much larger in size. It is commonly consumed with chole, i.e. chickpea gravy."
		},
		
		{
			question : `10. Which of these is a Bengali sweet?\n a) Rasgulla \n b) Kulfi \n c) Kheer \n d) Payasam \n`,
			 answer : "a",
			 fact   : "Rasgulla is white in colour. It resembles the Gulab jamun. It is served with sugar syrup. Another popular Bengali sweet is Sandesh."
		}
];

for (const ques of questionList){
		playQuiz(ques);
}



log(chalk.yellow(userName) + " ,your final score is : " + chalk.green(score) + " \n\n");


var topScorers = [
	{	name : "Suraj",
		score: 7
	},
	{	name : "Akshay",
		score: 7
	},
	{	name : "Deepak",
		score: 6
	},
	{	name : "Vaibhav",
		score: 5
	},
];

function hasUserBeatenHighScore(){
		for (const curr of topScorers){
			if(score > curr.score){
				log(chalk.cyan("Congratulations! you have beat one of the top score Please send me a screenshot of your score.\n") );
				break;
			}
		}
}
hasUserBeatenHighScore();

function printObj(obj){
	for (const o of obj){
		console.log(o.name + " : " + o.score);
	}
}

log(chalk.black.bgCyan.bold("\nThe top scorers are :"));
printObj(topScorers);

log(chalk.bgYellow("\nI hope you enjoyed the quiz....."));