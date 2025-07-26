const serverData = [
    {
        category: 'Server Jars',
        items: [
            {
                name: 'Paper',
                logo: 'https://imgs.search.brave.com/Kn0aX4c_GSfuXMYxo--pjbRNRON_OBAAD-wUk8vMFNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucGFwZXJtYy5p/by9icmFuZC9wYXBl/cm1jX2xvZ28uMjU2/LnBuZw',
                latestVersion: '1.21.8',
                description: 'Paper is a Minecraft game server based on Spigot, designed to greatly improve performance and offer more advanced features and API.',
                tags: ['performance', 'plugins', 'spigot-fork', 'papermc'],
                sourceUrl: 'https://github.com/PaperMC/Paper',
                versions: [
                    { version: '1.21.8', url: 'https://fill-data.papermc.io/v1/objects/9457d1279efcc2094e818cacb2f17670d9479e5f6b4ea2517eb93a6a3face51f/paper-1.21.8-11.jar' },
                    { version: '1.21.7', url: 'https://fill-data.papermc.io/v1/objects/83838188699cb2837e55b890fb1a1d39ad0710285ed633fbf9fc14e9f47ce078/paper-1.21.7-32.jar' },
                    { version: '1.21.6', url: 'https://fill-data.papermc.io/v1/objects/35e2dfa66b3491b9d2f0bb033679fa5aca1e1fdf097e7a06a80ce8afeda5c214/paper-1.21.6-48.jar' },
                    { version: '1.21.5', url: 'https://fill-data.papermc.io/v1/objects/2ae6ae22adf417699746e0f89fc2ef6cb6ee050a5f6608cee58f0535d60b509e/paper-1.21.5-114.jar' },
                    { version: '1.21.4', url: 'https://fill-data.papermc.io/v1/objects/5ee4f542f628a14c644410b08c94ea42e772ef4d29fe92973636b6813d4eaffc/paper-1.21.4-232.jar' },
                    { version: '1.21.3', url: 'https://fill-data.papermc.io/v1/objects/87e973e1d338e869e7fdbc4b8fadc1579d7bb0246a0e0cf6e5700ace6c8bc17e/paper-1.21.3-83.jar' },
                    { version: '1.21.1', url: 'https://fill-data.papermc.io/v1/objects/39bd8c00b9e18de91dcabd3cc3dcfa5328685a53b7187a2f63280c22e2d287b9/paper-1.21.1-133.jar' },
                    { version: '1.21', url: 'https://fill-data.papermc.io/v1/objects/ab9bb1afc3cea6978a0c03ce8448aa654fe8a9c4dddf341e7cbda1b0edaa73f5/paper-1.21-130.jar' },
                    { version: '1.20.6', url: 'https://fill-data.papermc.io/v1/objects/4b011f5adb5f6c72007686a223174fce82f31aeb4b34faf4652abc840b47e640/paper-1.20.6-151.jar' },
                    { version: '1.20.5', url: 'https://fill-data.papermc.io/v1/objects/3cd7da2f8df92e082a501a39c674aab3c0343edd179b86f5baccaebfc9974132/paper-1.20.5-22.jar' },
                    { version: '1.20.4', url: 'https://fill-data.papermc.io/v1/objects/cabed3ae77cf55deba7c7d8722bc9cfd5e991201c211665f9265616d9fe5c77b/paper-1.20.4-499.jar' },
                    { version: '1.20.2', url: 'https://fill-data.papermc.io/v1/objects/ba340a835ac40b8563aa7eda1cd6479a11a7623409c89a2c35cd9d7490ed17a7/paper-1.20.2-318.jar' },
                    { version: '1.20.1', url: 'https://fill-data.papermc.io/v1/objects/234a9b32098100c6fc116664d64e36ccdb58b5b649af0f80bcccb08b0255eaea/paper-1.20.1-196.jar' },
                    { version: '1.20', url: 'https://fill-data.papermc.io/v1/objects/1e4ccfc0599f491ee6fee4455d3722332ac5d78584fccd55cbb3b51e11504505/paper-1.20-17.jar' },
                    { version: '1.19.4', url: 'https://fill-data.papermc.io/v1/objects/e587d78cba3e99ef8c4bc24cf20cc3bdbbe89e33b0b572070446af4eb6be5ccf/paper-1.19.4-550.jar' },
                    { version: '1.19.3', url: 'https://fill-data.papermc.io/v1/objects/3007f2c638d5f04ed32b6adaa33053fe3634ccfa74345c83d3ea4982d38db5dc/paper-1.19.3-448.jar' },
                    { version: '1.19.2', url: 'https://fill-data.papermc.io/v1/objects/2eb5c7459ec94bcdc597ed711d549a3ab4b0fda13e412a0792a1a069b5903864/paper-1.19.2-307.jar' },
                    { version: '1.19.1', url: 'https://fill-data.papermc.io/v1/objects/5afe23a1fade92c547124fa874bc7d908fa676f49f09879fa876224b62e9d51b/paper-1.19.1-111.jar' },
                    { version: '1.19', url: 'https://fill-data.papermc.io/v1/objects/0d39cacc51a77b2b071e1ce862fcbf0b4a4bd668cc7e8b313598d84fa09fabac/paper-1.19-81.jar' },
                    { version: '1.18.2', url: 'https://fill-data.papermc.io/v1/objects/0578f18f4d632b494b468ec56b3b414b5b56fea087ee7d39cf6dcdf4c9d01f05/paper-1.18.2-388.jar' },
                    { version: '1.18.1', url: 'https://fill-data.papermc.io/v1/objects/a94917a4472c2cbc9907a15c666bbb784f95ecd7b53c77bc08fe71103e5487f5/paper-1.18.1-216.jar' },
                    { version: '1.18', url: 'https://fill-data.papermc.io/v1/objects/3c995f20dae4e4e21d5554fac957a0a8a5c85bd5bf34915fac4b4f16e0ef101b/paper-1.18-66.jar' },
                    { version: '1.17.1', url: 'https://fill-data.papermc.io/v1/objects/6cc1ee2f94253ce10b5374ed85fffc735a97d8f1b64db293683dfa24dd3cc05f/paper-1.17.1-411.jar' },
                    { version: '1.17', url: 'https://fill-data.papermc.io/v1/objects/760a93b94a58d619bd647d71af84688617d0444d22b716500bc6b343858dc871/paper-1.17-79.jar' },
                    { version: '1.16.5', url: 'https://fill-data.papermc.io/v1/objects/e67da4851d08cde378ab2b89be58849238c303351ed2482181a99c2c2b489276/paper-1.16.5-794.jar' },
                    { version: '1.16.4', url: 'https://fill-data.papermc.io/v1/objects/963268ed564ac7d2ec076463e921ffa09570235f587bbd1a4d91a23ca4264b66/paper-1.16.4-416.jar' },
                    { version: '1.16.3', url: 'https://fill-data.papermc.io/v1/objects/940303ee5f5bcc08377e388ea1c1daa109c1ac8c4d189dc67de1106853f2fc23/paper-1.16.3-253.jar' },
                    { version: '1.16.2', url: 'https://fill-data.papermc.io/v1/objects/e5e10517daaa9bd6d54a8a0d22d866e31da7c1b47cb9e425ffaac236fde75ec9/paper-1.16.2-189.jar' },
                    { version: '1.16.1', url: 'https://fill-data.papermc.io/v1/objects/929559ba1dfc6de2904e17289fb3d1ac95f0ab48c7540cf5b8c2f055fea9d59c/paper-1.16.1-138.jar' },
                    { version: '1.15.2', url: 'https://fill-data.papermc.io/v1/objects/bd2dd6f2cc489cf9e2bb800cb4fb6d63e9d293945d3ac10b09dd9c6098fa9f34/paper-1.15.2-393.jar' },
                    { version: '1.15.1', url: 'https://fill-data.papermc.io/v1/objects/22a7a19f378db8edf92cdba57d91ceea7e4fa6470b677e6bbe57e8f7e1d9a4dd/paper-1.15.1-62.jar' },
                    { version: '1.15', url: 'https://fill-data.papermc.io/v1/objects/8b726c0deb6c3a265d679a3d3a2c0f8e5243fbc6ddcfcaf42e24209cb1f829b4/paper-1.15-21.jar' },
                    { version: '1.14.4', url: 'https://fill-data.papermc.io/v1/objects/bd8ec5cdb22370d37816a6de26798df3d2b0d6f9c7c96c88ca45a1303fea50e8/paper-1.14.4-245.jar' },
                    { version: '1.14.3', url: 'https://fill-data.papermc.io/v1/objects/b6d2d8ac67d685141697a8cecd99c47baf604900007eb0e270fd6ea86cbbc540/paper-1.14.3-134.jar' },
                    { version: '1.14.2', url: 'https://fill-data.papermc.io/v1/objects/12034e578e014eb369e2929f3725bd409858bf94128e46d1f286d5be36c3cb0e/paper-1.14.2-107.jar' },
                    { version: '1.14.1', url: 'https://fill-data.papermc.io/v1/objects/2bcf8017485cc41b3e72daa7285a46f26a85d055b9d638bc9a07f77632168ad7/paper-1.14.1-50.jar' },
                    { version: '1.14', url: 'https://fill-data.papermc.io/v1/objects/338be77f5239c44cff3f80f5c107b5e61ac48fb39348bce7249303209201072a/paper-1.14-17.jar' },
                    { version: '1.13.2', url: 'https://fill-data.papermc.io/v1/objects/11e828d0565ab76a0a0e180c056364a95de44958cfd6a6af3f9b1dc70b03e9cd/paper-1.13.2-657.jar' },
                    { version: '1.13.1', url: 'https://fill-data.papermc.io/v1/objects/6637401d87d0f5db5aaee90d7103f52c5e1baaf6b6d4643a5793e7b02b5775cb/paper-1.13.1-386.jar' },
                    { version: '1.13', url: 'https://fill-data.papermc.io/v1/objects/00db82d214242c9345266d44ff8d11a8e857a1a02edf7cb5fcc2d1d973283129/paper-1.13-173.jar' },
                    { version: '1.13-pre7', url: 'https://fill-data.papermc.io/v1/objects/8c2c4dbc3a2842be8454b4c4b306266bc622e2db681233558fedf8230800940c/paper-1.13-pre7-12.jar' },
                    { version: '1.12.2', url: 'https://fill-data.papermc.io/v1/objects/3a2041807f492dcdc34ebb324a287414946e3e05ec3df6fd03f5b5f7d9afc210/paper-1.12.2-1620.jar' },
                    { version: '1.12.1', url: 'https://fill-data.papermc.io/v1/objects/dba2219d674ad85e4ef2c41931d34b6fa4be75a887973ecaaf286727a03812da/paper-1.12.1-1204.jar' },
                    { version: '1.12', url: 'https://fill-data.papermc.io/v1/objects/1e7e88a2ed6f2b70fa3f6ec6611373458c5d72b2a8707e60921df601c791e60e/paper-1.12-1169.jar' },
                    { version: '1.11.2', url: 'https://fill-data.papermc.io/v1/objects/3d0f40ec1f9630dfdbafa626cc20c266d7fb90fc22583dc1b995e7fbfb76830d/paper-1.11.2-1106.jar' },
                    { version: '1.10.2', url: 'https://fill-data.papermc.io/v1/objects/83354d24a22b6265e76c089b3d17a568abb446c0ccd12c2452f5e148412b16c2/paper-1.10.2-918.jar' },
                    { version: '1.9.4', url: 'https://fill-data.papermc.io/v1/objects/15a5821ddeacc596432c3fbf24262a2d264f556060ecd6f1838fb01ab5629a81/paper-1.9.4-775.jar' },
                    { version: '1.8.8', url: 'https://fill-data.papermc.io/v1/objects/7ff6d2cec671ef0d95b3723b5c92890118fb882d73b7f8fa0a2cd31d97c55f86/paper-1.8.8-445.jar' },
                ]
            },
            {
                name: 'Folia',
                logo: 'img/folia.svg',
                latestVersion: '1.21.6',
                description: 'Folia is a new fork of Paper that adds regionized multithreading to the server',
                tags: ['multithreaded', 'papermc', 'new', 'own plugin ecosystem', 'performance'],
                sourceUrl: 'https://github.com/PaperMC/Folia',
                versions: [
                    { version: '1.21.6', url: 'https://fill-data.papermc.io/v1/objects/917a8abaa542c1d0ef0e969693e227a7bfe1c42e671aaa806309e00a64efc234/folia-1.21.6-6.jar' },
                    { version: '1.21.5', url: 'https://fill-data.papermc.io/v1/objects/ebeb8f2f9e97fd972c89ebc276bc547c6194c6542d3a1884e3cfef7228f69cdb/folia-1.21.5-12.jar' },
                    { version: '1.21.4', url: 'https://fill-data.papermc.io/v1/objects/dcf2333211c1468c8eddc482bc8549600818cc661a709124a79c752f8fa2ac3a/folia-1.21.4-6.jar' },
                    { version: '1.20.6', url: 'https://fill-data.papermc.io/v1/objects/a30625d8824b03aae64898b001b46bdc4424b0e5caee1a370af7b444d8ec361a/folia-1.20.6-6.jar' },
                    { version: '1.20.4', url: 'https://fill-data.papermc.io/v1/objects/b0d55be3ba19cb6e040f0e7fba400e5224a271fbc7db73a9683aef7468425af9/folia-1.20.4-31.jar' },
                    { version: '1.20.2', url: 'https://fill-data.papermc.io/v1/objects/d01746e0176b6ef1ae0bef65bc3fa44e2f2063eaa8ab78f9e941345268d4c9e5/folia-1.20.2-20.jar' },
                    { version: '1.20.1', url: 'https://fill-data.papermc.io/v1/objects/c533d8886c60e1db17ebcf841b862731ab0a18d72377f37189930c3324eb7759/folia-1.20.1-17.jar' },
                    { version: '1.19.4', url: 'https://fill-data.papermc.io/v1/objects/e6729be678110cf76b5feebaf4da09f447aacad907350f156bf163b561a9d979/folia-1.19.4-39.jar' },
                ]
            }
        ]
    },
    {
        category: 'Proxies',
        items: [
            {
                name: 'Velocity',
                logo: 'img/velocity.svg',
                latestVersion: '3.4.0-SNAPSHOT',
                description: "Velocity is the modern, high-performance proxy. Designed with performance and stability in mind, it's a full alternative to Waterfall with its own plugin ecosystem.",
                tags: ['proxy', 'performance', 'security', 'papermc'],
                sourceUrl: 'https://github.com/PaperMC/Velocity',
                versions: [
                    { version: '3.4.0-SNAPSHOT', url: 'https://fill-data.papermc.io/v1/objects/f82780ce33035ebe3d6ea7981f0e6e8a3e41a64f2080ef5c0f1266fada03cbee/velocity-3.4.0-SNAPSHOT-522.jar' },
                    { version: '3.3.0-SNAPSHOT', url: 'https://fill-data.papermc.io/v1/objects/06bb2a6ac16228a2f33a0336952624e6918a97535d36a3660725b18e2a6efdfb/velocity-3.3.0-SNAPSHOT-436.jar' },
                    { version: '3.2.0-SNAPSHOT', url: 'https://fill-data.papermc.io/v1/objects/27f78414a3c39736130b28e69c2d22f52e13cb6c70a9245a7c07a4a76787723e/velocity-3.2.0-SNAPSHOT-296.jar' },
                    { version: '3.1.2-SNAPSHOT', url: 'https://fill-data.papermc.io/v1/objects/823393405413413dae1f7c83c89851dbe7439e719cc31793a15b9aad951a4315/velocity-3.1.2-SNAPSHOT-207.jar' },
                    { version: '3.1.1', url: 'https://fill-data.papermc.io/v1/objects/89a44c6385e39712717e2476254f931717f4d718deeb72578d159187cf5119c7/velocity-3.1.1-102.jar' },
                    { version: '3.1.1-SNAPSHOT', url: 'https://fill-data.papermc.io/v1/objects/f2fbf80d9ef089d9905db3b841232d25a2e16a6208dfadb5704a3d9f9ead8e8d/velocity-3.1.1-SNAPSHOT-97.jar' },
                    { version: '3.1.0', url: 'https://fill-data.papermc.io/v1/objects/7b509535916a3ee4dacea289915a2851b87f4738bd42f12ff38b674417b5f683/velocity-3.1.0-95.jar' },
                    { version: '1.1.9', url: 'https://fill-data.papermc.io/v1/objects/d6ba2c934eb956b3aea5381135fb6c5763bb3a50a85022671fac6f5bfed63843/velocity-1.1.9-447.jar' },
                    { version: '1.0.10', url: 'https://fill-data.papermc.io/v1/objects/16e786af6b6c9c34e77f6229c8fd573b7b97a8394beb3575bfdfa0b34826cae3/velocity-1.0.10-245.jar' },
                ]
            },
            {
                name: 'Waterfall',
                logo: 'img/waterfall.svg',
                latestVersion: '1.21',
                description: "Waterfall is the BungeeCord fork that aims to improve performance and stability.",
                tags: ['proxy', 'archived', 'outdated', 'papermc'],
                sourceUrl: 'hhttps://github.com/PaperMC/Waterfall',
                versions: [
                    { version: '1.21', url: 'https://fill-data.papermc.io/v1/objects/954b48b95a4300e1493aaa0c9532fc4a89d38136d74ccfb6df8c2b60eea48ee6/waterfall-1.21-598.jar' },
                    { version: '1.20', url: 'https://fill-data.papermc.io/v1/objects/a6786337d4d41e19b5d0f771027b01956e6fb11a62244e762f5dae2e76c34644/waterfall-1.20-578.jar' },
                    { version: '1.19', url: 'https://fill-data.papermc.io/v1/objects/0af08aa26cb46a1a524bbb79d23dffed434689599d04dd0f95ff50f84338f542/waterfall-1.19-535.jar' },
                    { version: '1.18', url: 'https://fill-data.papermc.io/v1/objects/55a77b6355d200913fc5fa8715142d22b46abd416fe64e7902726ce4a53f21df/waterfall-1.18-488.jar' },
                    { version: '1.17', url: 'https://fill-data.papermc.io/v1/objects/abc6e7d456c80b9b602ad5c3f7045100f668e1179c1b9eb1fbd521775082b2ef/waterfall-1.17-454.jar' },
                    { version: '1.16', url: 'https://fill-data.papermc.io/v1/objects/1b693eccdaba55236e93121c3e194f2ef5e55584a798156a17aed4e48c574879/waterfall-1.16-431.jar' },
                    { version: '1.15', url: 'https://fill-data.papermc.io/v1/objects/4f5dfd27f9041a3a4a0a35745f168b674f48ef4019886d2acfd56d014fcb5448/waterfall-1.15-350.jar' },
                    { version: '1.14', url: 'https://fill-data.papermc.io/v1/objects/1915a52f45281630238b4b6e20b29e60539a177a63d694c6bc8b61f7a57ce3a1/waterfall-1.14-301.jar' },
                    { version: '1.13', url: 'https://fill-data.papermc.io/v1/objects/978b0593d87676f52ae932fa69c1db52bc1ff1304eda12ab5e59f2bd982fcb10/waterfall-1.13-276.jar' },
                    { version: '1.12', url: 'https://fill-data.papermc.io/v1/objects/6032f30e9f57ce943d40e130b6112a2ee2fc8a9264fb1547db59443155684ef8/waterfall-1.12-185.jar' },
                    { version: '1.11', url: 'https://fill-data.papermc.io/v1/objects/a660a20dddfe0c3d86a011789ccda6d7401bd67a87c6e4f9dd3b13f0fa6afc2f/waterfall-1.11-108.jar' },
                ]
            },
            {
                name: 'BungeeCord',
                logo: 'https://proxy.spigotmc.org/0e97ad6ff9f812673c4274b355fb5aa8289bc6e9/687474703a2f2f692e696d6775722e636f6d2f4d41673272324a2e706e67',
                latestVersion: 'build #1995',
                description: "BungeeCord, the 6th in a generation of server portal suites. Efficiently proxies and maintains connections and transport between multiple Minecraft servers.",
                tags: ['proxy', 'original', 'spigotmc'],
                sourceUrl: 'https://github.com/SpigotMC/BungeeCord',
                versions: [
                    { version: 'build #1995', url: 'https://ci.md-5.net/job/BungeeCord/1995/artifact/bootstrap/target/BungeeCord.jar' }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const searchInput = document.getElementById('search-input');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');

    const createServerCard = (item) => {
        const card = document.createElement('div');
        card.className = 'server-card';
        // Store searchable data
        card.dataset.name = item.name.toLowerCase();
        card.dataset.description = item.description.toLowerCase();
        card.dataset.tags = item.tags.join(' ').toLowerCase();

        const versionsHTML = item.versions.map(v => `
            <li class="version-item">
                <span>Version ${v.version}</span>
                <a href="${v.url}" class="download-btn">
                    <i data-lucide="download"></i> Download
                </a>
            </li>
        `).join('');

        const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-header">
                <img src="${item.logo}" alt="${item.name} Logo" class="server-logo">
                <div class="server-info">
                    <h3>${item.name}</h3>
                    <span class="latest-version">Latest: ${item.latestVersion}</span>
                </div>
            </div>
            <div class="card-body">
                <p>${item.description}</p>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            </div>
            <div class="card-footer">
                 <a href="${item.versions[0].url}" class="download-latest-btn">
                    <i data-lucide="download"></i> Download Latest
                </a>
                <a href="${item.sourceUrl}" class="source-btn" target="_blank" rel="noopener noreferrer" title="View Source">
                    <i data-lucide="github"></i>
                </a>
                <button class="toggle-history-btn">
                    <i data-lucide="history"></i>
                    <span>Version History</span>
                </button>
            </div>
            <div class="version-history">
                <ul class="version-list">
                    ${versionsHTML}
                </ul>
            </div>
        `;
        return card;
    };

    serverData.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.category;
        categorySection.appendChild(categoryTitle);

        const serverGrid = document.createElement('div');
        serverGrid.className = 'server-grid';
        
        category.items.forEach(item => {
            const card = createServerCard(item);
            serverGrid.appendChild(card);
        });

        categorySection.appendChild(serverGrid);
        appContainer.appendChild(categorySection);
    });

    lucide.createIcons();

    appContainer.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.toggle-history-btn');
        if (toggleBtn) {
            const card = toggleBtn.closest('.server-card');
            const history = card.querySelector('.version-history');
            history.classList.toggle('active');

            const icon = toggleBtn.querySelector('i');
            const text = toggleBtn.querySelector('span');

            if (history.classList.contains('active')) {
                text.textContent = 'Hide';
                icon.setAttribute('data-lucide', 'chevron-up');
            } else {
                text.textContent = 'Version History';
                icon.setAttribute('data-lucide', 'history');
            }
            lucide.createIcons({
                nodes: [icon]
            });
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        document.querySelectorAll('.category-section').forEach(section => {
            let visibleCards = 0;
            const grid = section.querySelector('.server-grid');

            grid.querySelectorAll('.server-card').forEach(card => {
                const name = card.dataset.name;
                const description = card.dataset.description;
                const tags = card.dataset.tags;
                const searchData = `${name} ${description} ${tags}`;

                const isVisible = searchData.includes(searchTerm);
                card.style.display = isVisible ? 'flex' : 'none';
                if (isVisible) {
                    visibleCards++;
                }
            });

            section.style.display = visibleCards > 0 ? 'block' : 'none';
        });
    });

    // View toggle logic
    const setupViewToggle = () => {
        gridViewBtn.addEventListener('click', () => {
            if (gridViewBtn.classList.contains('active')) return;
            
            document.querySelectorAll('.server-grid').forEach(grid => grid.classList.remove('list-view'));
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', () => {
            if (listViewBtn.classList.contains('active')) return;

            document.querySelectorAll('.server-grid').forEach(grid => grid.classList.add('list-view'));
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    };

    setupViewToggle();
});