function change(block) {
    let auditText = `Smart contract audits encompass the process of independently verifying and analyzing the code to assess potential code bugs, vulnerabilities, and their ramifications.<br><br>In more straightforward language, auditors conduct a thorough assessment of the code to identify and address any possible bugs or vulnerabilities.<br><br>This check helps to ensure that the code is working correctly and securely. It helps reduce risk and protect users investments.`;

    let legalText = `The levels of complexity in certain documents may vary depending on the project's unique characteristics and mechanisms.<br><br>We have a flexible approach as a team, and we will determine the most suitable choice for your requirements.`;

    let marketingText = `PR Publications<br><br>Get native coverage in leading crypto, business, and tech media. Amplify the reach of your announcement by distributing your press release through our network of hundreds of crypto-focused media platforms.<br><br>Crypto Influencers (KOLs)<br><br>Increase traffic, expand your community, and elevate brand visibility with influencer marketing. Connect with a network of 1,300+ crypto KOLs across platforms like YouTube, X (Twitter), Telegram, Instagram, TikTok, and Twitch.`;

    let trafficText = `Crypto SEO<br><br>If you&apos;re planning to stay in the crypto space long-term, SEO remains one of the most cost-efficient ways to drive consistent traffic. However, the real challenge lies in finding the right experts to manage it. Start today and see your project scale sustainably!<br><br>Social Media Ads<br><br>We help Web3 companies attract targeted traffic from top social media platforms like Facebook, Instagram, and X<br><br>Search Engine Ads<br><br>In addition to influencer marketing, paid search traffic is one of the most effective methods for driving targeted visitors to your crypto project. We help you reach potential users and investors through strategic ad placements on Google, Bing, and Yahoo.<br><br>Crypto Banner Ads<br><br>Banner ads on top crypto media platforms like Cointelegraph, CoinDesk, CoinMarketCap, and Etherscan drive targeted Web3 traffic straight to your website. With Lead Crafters, you can choose from over 110 banner placement opportunities across nearly 50 leading blockchain-focused sites.<br><br>Crypto Shilling<br><br>Looking to generate real buzz around your token or Web3 project? We’ll help amplify your brand by posting thousands of targeted messages across platforms like Reddit, Telegram, Quora, Discord, and other active crypto communities and channels.<br><br>Crypto Trending Services<br><br>New cryptocurrencies emerge daily, but only a few gain the spotlight and make it to trending lists on major platforms like CoinMarketCap, CoinGecko, and Crypto.com.<br><br>Being featured in these trending sections significantly boosts your project’s visibility and credibility. Trending tokens attract high investor interest and search volume. Our team is ready to help your token climb the ranks and become the next big trend!`;

    let devText = `Community Growth<br><br>Want to grow your Web3 project, attract quality users, and build an active community? Our customized marketing strategies drive targeted traffic, boost user engagement, and support long-term growth in the decentralized ecosystem.<br><br>Social Media Management<br><br>According to a classic marketing principle, it takes around seven interactions to convert a prospect into a customer. Consistent social media management helps you achieve this by steadily building connections and trust with your audience.<br><br>Community Management<br><br>In the crypto space, a strong community is essential to a startup’s success. Without a community, there are no users — and without users, attracting investors becomes nearly impossible. That’s why effective community management is critical to the growth of your token, NFT project, or entire company. We provide a range of moderation services tailored for Telegram and Discord to help you build and maintain an engaged audience.<br><br>Crypto Website Development<br><br>Lead Crafters can support your Web3 or crypto startup by creating a professional website — whether it’s a sleek one-pager or a full multi-page platform. We work with WordPress, Webflow, and Tilda. Already have your own development team? No problem — we can assist with custom design creation to bring your vision to life.<br><br>Content Creation<br><br>Whether you need SEO content, social media copy, or a single press release, we’re here to handle all your crypto copywriting needs — tailored to your goals and audience.<br><br>Marketing Strategy Creation<br><br>Without a clear marketing strategy, crypto companies risk spending time and money on tactics that don’t deliver results. We craft tailored marketing strategies that help startups stand out, build brand awareness, and attract both users and investors.`;

    let contentField = document.querySelector("#audit__block-content");

    let buttons = [
        "audit__selection-audit",
        "audit__selection-legal",
        "audit__selection-marketing",
        "audit__selection-traffic",
        "audit__selection-dev"
    ];

    buttons.forEach(id => {
        let btn = document.querySelector(`#${id}`);
        btn.style.backgroundColor = "#354924";
        btn.style.color = "#EFF7EA";
    });

    block.style.backgroundColor = "#EFF7EA";
    block.style.color = "#354924";

    switch (block.id) {
        case "audit__selection-audit":
            contentField.innerHTML = auditText;
            contentField.className = "audit__block-content audit__block-content__small";
            break;
        case "audit__selection-legal":
            contentField.innerHTML = legalText;
            contentField.className = "audit__block-content audit__block-content__small";
            break;
        case "audit__selection-marketing":
            contentField.innerHTML = marketingText;
            contentField.className = "audit__block-content audit__block-content__large";
            break;
        case "audit__selection-traffic":
            contentField.innerHTML = trafficText;
            contentField.className = "audit__block-content audit__block-content__large";
            break;
        case "audit__selection-dev":
            contentField.innerHTML = devText;
            contentField.className = "audit__block-content audit__block-content__large";
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    change(document.querySelector("#audit__selection-audit"));
});
