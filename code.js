			var message = "Hi, this is a message";
			console.log(message);
			
			var count = 99;
			var word1 = "bottles";
			var word2 = "one";

			while (count > 0) {

			document.write(count+" "+word1+" of Dr Pepper on the wall,<br>");
			document.write(count+" "+word1+" of Dr Pepper,<br>");
			document.write("Take "+word2+" down and pass it around,<br>");
			count = count - 1;
			if (count > 1) {
			word2 = "one";
			} else {
			word2 = "it";
			}
			if (count > 1 | count === 0) {
			word1 = "bottles";
			} else {			
			word1 = "bottle";
			}

			document.write(count+" "+word1+" of Dr Pepper on the wall.<br><br>");
			}
