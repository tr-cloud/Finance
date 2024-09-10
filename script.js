const translations = {
    en: {
      title: "Finance Savings Calculator",
      enterIncome: "Enter Your Income and Expenses",
      income: "Income:",
      expenses: "Expenses:",
      button: "Get Saving Suggestion",
      saving: "You can save: $",
      error: "Please enter valid numbers. Your income should be higher than your expenses!",
      quote: "Save money and money will save you."
    },
    hi: {
      title: "वित्त बचत कैलकुलेटर",
      enterIncome: "अपनी आय और खर्च दर्ज करें",
      income: "आय:",
      expenses: "खर्चे:",
      button: "बचत सुझाव प्राप्त करें",
      saving: "आप बचा सकते हैं: ₹",
      error: "कृपया सही संख्याएँ दर्ज करें। आपकी आय आपके खर्चों से अधिक होनी चाहिए!",
      quote: "पैसा बचाओ और पैसा आपको बचाएगा।"
    },
    ta: {
      title: "நிதி சேமிப்பு கணக்கீட்டு கருவி",
      enterIncome: "உங்கள் வருமானத்தையும் செலவுகளையும் உள்ளிடுங்கள்",
      income: "வருமானம்:",
      expenses: "செலவுகள்:",
      button: "சேமிப்பு பரிந்துரை பெற",
      saving: "நீங்கள் சேமிக்கலாம்: ₹",
      error: "சரியான எண்களை உள்ளிடுங்கள். உங்கள் வருமானம் செலவுகளை விட அதிகமாக இருக்க வேண்டும்!",
      quote: "பணத்தைச் சேமிக்கவும், பணம் உங்களைச் சேமிக்கவும்."
    },
    kn: {
      title: "ಹಣ ಉಳಿತಾಯ ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್",
      enterIncome: "ನಿಮ್ಮ ಆದಾಯ ಮತ್ತು ವೆಚ್ಚಗಳನ್ನು ನಮೂದಿಸಿ",
      income: "ಆದಾಯ:",
      expenses: "ವೆಚ್ಚಗಳು:",
      button: "ಉಳಿತಾಯ ಸಲಹೆ ಪಡೆಯಿರಿ",
      saving: "ನೀವು ಉಳಿತಾಯ ಮಾಡಬಹುದು: ₹",
      error: "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಸಂಖ್ಯೆಗಳನ್ನಿಡಿ. ನಿಮ್ಮ ಆದಾಯವು ವೆಚ್ಚಗಿಂತ ಹೆಚ್ಚು ಆಗಿರಬೇಕು!",
      quote: "ಹಣವನ್ನು ಉಳಿಸಿ, ಹಣವು ನಿಮ್ಮನ್ನು ಉಳಿಸುತ್ತದೆ."
    }
  };
  
  document.getElementById('finance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    
    if (!isNaN(income) && !isNaN(expenses) && income > expenses) {
      const savings = income - expenses;
      const language = document.getElementById('language').value;
      const trans = translations[language];
      
      document.getElementById('suggestion').innerText = `${trans.saving}${savings.toFixed(2)}`;
      
      
      showQuote(language);
    } else {
      const language = document.getElementById('language').value;
      const trans = translations[language];
      document.getElementById('suggestion').innerText = trans.error;
    }
  });
  
  function changeLanguage() {
    const language = document.getElementById('language').value;
    const trans = translations[language];
  
    document.querySelector('h1').innerText = trans.title;
    document.querySelector('h2').innerText = trans.enterIncome;
    document.querySelector('label[for="income"]').innerText = trans.income;
    document.querySelector('label[for="expenses"]').innerText = trans.expenses;
    document.querySelector('button').innerText = trans.button;
  }
  
  function showQuote(language) {
    const quotes = translations[language].quote;
    document.getElementById('quote').innerText = quotes;
  
    const quotePopup = document.getElementById('quotes-popup');
    quotePopup.style.display = 'block';
  
    setTimeout(() => {
      quotePopup.style.display = 'none';
    }, 5000);
  }
  