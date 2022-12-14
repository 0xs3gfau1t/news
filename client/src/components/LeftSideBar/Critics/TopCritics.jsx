import React from "react"

import CriticCard from "./CriticCard"

export default function TopCritics() {
	return (
		<div className="mt-2 mb-4 w-full">
			<h2 className="font-bold text-2xl leading-loose">शीर्ष आलोचकहरू</h2>
			<div>
				{/* list of critics */}
				<CriticCard
					articleRef={"सगरमाथा आरोहण गर्न सजिलो छ noobs को लागि पनि..."}
					name="पासाङ ल्हामु शेर्पा"
					body="जय हनुमान ज्ञान गुण सागर जय किपिस तिहुन लोक उजगार रामदूत अतुलित बाल धमा, अञ्जनी पुत्र पवनसुत नामा।"
				/>
				<CriticCard
					articleRef={"लक्ष्मी चिट फण्डमा सीबीआईको छापा। ठगीको आशंका..."}
					name="बाबुराव गणपतराव आप्टे"
					body="उठाउ   भगवान उठाउ, म होइन यी दुई जनालाई उठाउ।"
				/>
				<CriticCard
					articleRef={"eSandesh - खबर नया युग को सुरुवात..."}
					name="सन्देश जि.सी."
					body="eSandesh नयाँ र नवीन विचारहरु संग एक आधुनिक समाचार पोर्टल हो। यो एक अनलाइन समाचार पोर्टल हो जसले समाचारहरू पढ्न र मानिसहरूसँग अन्तरक्रिया गर्न सजिलो र सहज बनाउँछ। योसँग तपाइँको समय बचत गर्न र तपाइँको उत्पादकता बढाउन विभिन्न उपकरणहरू छन्। म एक हप्ताको लागि यो साइटको नियमित प्रयोगकर्ता भएको छु र मैले यहाँ राम्रो अनुभव गरिरहेको छु।"
				/>
			</div>
		</div>
	)
}
