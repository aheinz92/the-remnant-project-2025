import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import images
import splashImg from '../assets/images/splash.png';
import bainbridgeImg from '../assets/images/bainbridge.png';
import seattleImg from '../assets/images/seattle.png';
// import timelineImg from '../assets/images/timeline.png'; // Not used yet

const timelinesData = [
    {
        id: 'us-history',
        title: 'US History',
        imgSrc: splashImg,
        altText: 'Kitsap County landscape',
        content: 'A chronological exploration of key events in United States history.',
        detailedContent: [], // Will be populated
    },
    {
        id: 'wa-history',
        title: 'Washington State History',
        imgSrc: bainbridgeImg,
        altText: 'Bainbridge Island landscape',
        content: 'Discover the rich history of Washington State through its pivotal moments.',
        detailedContent: [], // Will be populated
    },
    {
        id: 'aa-history',
        title: 'African American History',
        imgSrc: seattleImg,
        altText: 'Historic Seattle skyline',
        content: 'Tracing the impactful journey and contributions of African Americans throughout history.',
        detailedContent: [], // Will be populated
    },
];

// Placeholder for years for other timelines
const placeholderYears = Array.from({ length: 2018 - 1993 + 1 }, (_, i) => (1993 + i).toString());

// US History timeline detailed content
const usHistoryContent = [
  { year: "1492–1600s", items: ["European colonization begins in the Caribbean and Latin America; genocide and the Atlantic slave trade escalate."] },
  { year: "1607", items: ["English colonists arrive in Jamestown, Virginia."] },
    { year: "1610s–1620s", items: ["White indentured servants arrive in growing numbers."] },
    { year: "1619", items: ["First recorded arrival of enslaved Africans in English North America."] },
    { year: "1676", items: ["Bacon’s Rebellion unites poor whites, Africans, and Indigenous rebels; elites respond by dividing laborers through race-based laws."] },
    { year: "Late 1600s–1700s", items: ["Elites respond to rebellions by dividing laborers through race-based laws that grant poor whites privileges while codifying slavery and dispossession for Black and Indigenous people."] },
    { year: "1700", items: ["Millions of Africans are trafficked into slavery; the U.S. builds wealth on this system."] },
    { year: "1763", items: ["The British crown issues the *Proclamation Line*, blocking white settler expansion west of the Appalachians to avoid further conflict with Indigenous nations. Colonial elites and land speculators see this as a direct threat to their wealth and ambitions."] },
    { year: "1770", items: ["British troops fire on unarmed colonists in Boston, killing five—including Crispus Attucks, a Black and Indigenous man and the first to die in the American Revolution. The “massacre” intensifies anti-British resistance."] },
    { year: "1765", items: ["The *Stamp Act* imposes taxes on paper goods, provoking widespread colonial protest. Wealthy white colonists frame the resistance as a fight for liberty as the taxes threaten their profits from slavery and left theft."] },
    { year: "1773", items: ["In the *Boston Tea Party*, colonists destroy British property to protest taxation to protect their interests in trade and smuggling."] },
    { year: "1775–1783", items: ["The *American Revolutionary War* begins. Some Black people fight for the British in hopes of freedom; others are forced to serve the American side."] },
    { year: "1776", items: ["The Declaration of Independence claims “all men are created equal,” while enslavement of Africans and dispossession of Native lands remain central to the new republic’s foundation."] },
    { year: "1783", items: ["The war ends with the *Treaty of Paris*. The U.S. gains independence, but slavery expands, Native land theft accelerates, and racial capitalism deepens."] },
    { year: "1787", items: ["The Northwest Ordinance of 1787 establishes that slavery would be prohibited in the territory north of the Ohio River (the Northwest Territory), setting a precedent for the expansion of free states in new territories. However, this also made it clear that the institution of slavery would continue in Southern states and in the territories south of the Ohio River."] },
    { year: "1803", items: ["After cotton production is expanded westward into new territories, the United States acquired more territory, first through the Louisiana Purchase (1803). This rises questions of whether these new territories would permit slavery became increasingly contentious"] },
    { year: "1791–1804", items: ["The Haitian Revolution inspires fear in U.S. elites and leads to harsher slave laws in the American South."] },
    { year: "1820", items: ["The Missouri Compromise is passed to maintain a balance between free and slave states. It admits Missouri as a slave state and Maine as a free state, while prohibiting slavery north of the 36°30′ parallel in future territories."] },
    { year: "1830", items: ["*Indian Removal Act* signed by Andrew Jackson, forcing Indigenous nations off their lands, beginning the Trail of Tears."] },
    { year: "1830s", items: ["The abolitionist movement begins to gain momentum in the North, calling for the end of slavery."] },
    { year: "1840s", items: ["Chinese laborers (\"coolies\") imported for global and U.S. plantation and infrastructure work."] },
    { year: "1848", items: ["Treaty of Guadalupe Hidalgo annexes half of Mexico's territory to the U.S., creating a Latino underclass in the Southwest."] },
    { year: "1848–1855", items: ["California Gold Rush fuels racial violence, especially against Indigenous, Latino, and Chinese workers."] },
    { year: "1850", items: ["*Fugitive Slave Act* criminalizes Black freedom across the U.S., even in free states."] },
    { year: "1862", items: ["*Homestead Act* gives (white) settlers land stolen from Indigenous nations."] },
    { year: "1861–1865", items: ["Civil War leads to abolition of slavery."] },
    { year: "1865–1877", items: ["*Reconstruction* sees major Black political gains but is violently overturned."] },
    { year: "1877", items: ["*Jim Crow* laws begin, enforcing segregation and racial terror in the South."] },
    { year: "1882", items: ["*Chinese Exclusion Act* becomes first major federal immigration restriction based on race."] },
    { year: "1887", items: ["Breaks up communal Native land; pushes assimilation through boarding schools through Dawes Act."] },
    { year: "1896", items: ["The U.S. Supreme Court rules in Plessy v. Ferguson that racial segregation is constitutional under the \"separate but equal\" doctrine. This decision marginalizes Blacks in nearly every aspect of life, including education, employment, and public accommodations."] },
    { year: "Early 1900s", items: ["U.S. federal government breaks multiple treaties with Indigenous nations to seize land and suppress sovereignty"] },
    { year: "1914", items: ["World War I erupts in Europe, drawing in major powers including Germany, Austria-Hungary, France, Britain, and Russia. The United States initially maintains a neutral stance."] },
    { year: "1916–1970", items: ["Millions of Black Southerners move North and West, reshaping American cities."] },
    { year: "1918", items: ["World War I ends with the signing of the Armistice in November. While Black soldiers return home with a sense of pride in their service, they face racial discrimination both within the military and once back in the United States."] },
    { year: "1917–1924", items: ["Immigration quotas severely restrict non-European immigration, cementing white supremacist immigration policy."] },
    { year: "1919", items: ["“Red Summer” of racial massacres in dozens of U.S. cities."] },
    { year: "1920s", items: ["The roaring1920s are marked by significant economic growth in the U.S., particularly in industrial and consumer goods. However, this prosperity is not shared equally, with African Americans still facing racial discrimination and economic marginalization, especially in the South under Jim Crow laws."] },
    { year: "1924", items: ["Grants U.S. citizenship to Native peoples (but without full civil rights) through Native American Citizenship Act."] },
    { year: "1929", items: ["The U.S. stock market crashes in 1929, leading to the Great Depression, which results in massive unemployment and widespread poverty."] },
    { year: "1939", items: ["The outbreak of war in Europe sends shockwaves across the globe, escalating tensions and drawing many nations, including the United States, into the conflict. The war disrupts global economies and social structures, leading to a demand for increased industrial production."] },
    { year: "1941", items: ["The U.S. enters the war after the Japanese attack on Pearl Harbor. As the war intensifies, the demand for labor increases, particularly in factories and military production."] },
    { year: "1943", items: ["the migration of Black laborers into the cities for war-related jobs exacerbates tensions between Black workers and the white working class. The competition for jobs, housing, and resources sparks racial violence, culminates in the Detroit Race Riot."] },
    { year: "1945", items: ["World War II concludes in 1945, and Black soldiers return home after serving in segregated units."] },
    { year: "1930s–1940s", items: ["Jewish Americans begin to be absorbed into whiteness; New Deal and WWII-era benefits disproportionately favor European-descended whites."] },
    { year: "1930s–1970s", items: ["Thousands of Black, Indigenous, Puerto Rican, and poor women are forcibly sterilized."] },
    { year: "1942", items: ["Japanese Americans are incarcerated in camps by the U.S. government during WWII."] },
    { year: "1940s–1950s", items: ["GI Bill and housing subsidies create white suburban wealth while redlining locks out communities of color."] },
    { year: "1950s–1960s", items: ["*Civil Rights Movement* challenges legal segregation; Black women, Indigenous women, and Latinas are key organizers."] },
    { year: "1954", items: ["Brown v. Board ends legal segregation in education."] },
    { year: "1965", items: ["*Immigration and Nationality Act* ends racial quotas and opens path for non-European immigrants."] },
    { year: "1967", items: ["Interracial marriage legalized nationwide through Loving v. Virgina."] },
    { year: "1969", items: ["Queer and Trans Activists spark movement at Stonewall that continues through the AIDS crisis, marriage equality, and today’s fights for trans rights and gender justice."] },
    { year: "1970s", items: ["The U.S. begins *terminating* and reducing support for tribal nations; Native land and treaty rights are gutted."] },
    { year: "1970s–1980s", items: ["The U.S. funds and arms Afghan mujahideen (including Osama bin Laden) to fight Soviet forces, entrenching militarized Islamist networks during Cold War Era."] },
    { year: "1980s–1990s", items: ["U.S. support for authoritarian regimes (like Saudi Arabia) and Israeli military expansion fuels anti-American sentiment in the Middle East."] },
    { year: "1980s", items: ["*War on Drugs* disproportionately targets Black, Indigenous, and Latino communities, fueling mass incarceration."] },
    { year: "1990", items: ["Disabled activists fought for accessibility, inclusion, and rights—culminating in the Americans with Disabilities Act (ADA)."] },
    { year: "1990s", items: ["Harsh immigration and crime bills increase deportations, surveillance, and policing of Latino and Black communities."] },
    { year: "1991–2000", items: ["U.S.-led sanctions on Iraq cause massive civilian suffering, killing an estimated 500,000 children—radicalizing many."] },
    { year: "1993–2000", items: ["Al-Qaeda carries out attacks (World Trade Center, U.S. embassies, USS *Cole*) in response to U.S. global military presence."] },
    { year: "1994", items: ["NAFTA causes economic displacement in Mexico, increasing immigration to the U.S."] },
    { year: "1996", items: ["Clinton-era policy guts social supports, criminalizes poverty, especially for Black and Latina women."] },
    { year: "1996", items: ["Bans federal recognition of same-sex marriage (later overturned)."] },
    { year: "2000s", items: ["Ongoing Indigenous land struggles, immigrant family separations, voting rights rollbacks, and racialized policing persist."] },
    { year: "2001", items: ["Post-9/11 surveillance expands under the Patriot Act, disproportionately targeting Muslim, Arab, and South Asian communities."] },
    { year: "2005", items: ["Hurricane Katrina exposes racialized neglect and displacement of Black communities in New Orleans."] },
    { year: "2008", items: ["Barack Obama is elected the first Black U.S. President, a historic moment that sparks both progress and racial backlash."] },
    { year: "2010", items: ["*Citizens United v. FEC* rules that corporations are people under the First Amendment, unleashing massive corporate influence in politics."] },
    { year: "2013", items: ["*Shelby County v. Holder* guts the Voting Rights Act, enabling widespread voter suppression, especially in Black and Native communities."] },
    { year: "2014–2020", items: ["Black Lives Matter rises in response to police killings, spotlighting systemic racism in policing and criminal justice."] },
    { year: "2016", items: ["Donald Trump elected amid white nationalist resurgence, anti-immigrant policies, and attacks on civil rights protections."] },
    { year: "2017–2020", items: ["Indigenous-led resistance movements like *#NoDAPL* at Standing Rock and *Land Back* grow against land seizure and environmental injustice."] },
    { year: "2020", items: ["COVID-19 disproportionately impacts Black, Indigenous, and brown communities due to structural inequities in housing, healthcare, and labor."] },
    { year: "2020", items: ["Nationwide uprisings following the murders of George Floyd and Breonna Taylor spark global reckoning on race."] },
    { year: "2021", items: ["State-level bans target Black history, gender, and queer education under the guise of fighting “critical race theory.”"] },
    { year: "2022", items: ["*Dobbs v. Jackson* overturns Roe v. Wade, restricting abortion rights nationwide"] },
    { year: "Present", items: ["Book bans, anti-trans legislation, and reproductive rollbacks increase alongside mass organizing for equity and justice."] }
];

// African American History timeline detailed content
const aaHistoryContent = [
    { year: "1526", items: ["First Africans arrive in America."] },
    { year: "1641", items: ["Massachusetts becomes the first U.S. colony to recognize slavery as a legal institution."] },
    { year: "1753", items: ["Benjamin Banneker constructs the first striking clock to be made completely in America."] },
    { year: "1777", items: ["Vermont becomes the first American colony to abolish slavery."] },
    { year: "1793", items: ["Congress passes the first Fugitive Slave Act."] },
    { year: "1808", items: ["Federal law prohibits the importation of new African slaves in America."] },
    { year: "1816", items: ["The African Methodist Episcopal Church is established with Richard Allen as the first bishop."] },
    { year: "1833", items: ["The American Anti-Slavery Society is established in Philadelphia."] },
    { year: "1847", items: ["Frederick Douglass begins the North Star anti-slavery newspaper."] },
    { year: "1850", items: ["Harriet Tubman led her first journey on the Underground Railroad."] },
    { year: "1863", items: ["Abraham Lincoln issues the Emancipation Proclamation, freeing slaves from the Confederate states."] },
    { year: "1865", items: ["Thirteenth Amendment is ratified, abolishing slavery in the U.S."] },
    { year: "1868", items: ["Fourteenth Amendment is ratified, recognizing former slaves as U.S. citizens."] },
    { year: "1870", items: ["Fifteenth Amendment is ratified, giving African-American men the right to vote."] },
    { year: "1881", items: ["Blanche Kelso Bruce, U.S. Senator from Mississippi, becomes the first African-American to serve a full term in the U.S. Senate."] },
    { year: "1887", items: ["Eatonville, FL becomes the first incorporated African-American community in the U.S."] },
    { year: "1893", items: ["Dr. Daniel Hale Williams performs the first open-heart surgery in the U.S."] },
    { year: "1900", items: ["James Weldon Johnson pens the poem, \"Lift Every Voice and Sing\", which becomes widely recognized as the \"Negro National Anthem\"."] },
    { year: "1904", items: ["Mary McLeod Bethune starts Daytona Normal and Industrial Institute now known as Bethune-Cookman College in Daytona, FL."] },
    { year: "1905", items: ["Madam C.J. Walker starts a company to market new haircare products for African-American women."] },
    { year: "1909", items: ["National Association for the Advancement of Colored People (NAACP) is founded."] },
    { year: "1910", items: ["National Urban League is founded."] },
    { year: "1920", items: ["Baseball's Negro National League is founded by Andrew \"Rube\" Foster."] },
    { year: "1923", items: ["Garrett Morgan patents the traffic signal."] },
    { year: "1927", items: ["Big Band legend Duke Ellington opens at the famed Cotton Club in Harlem."] },
    { year: "1939", items: ["Opera legend Marian Anderson performs on the steps of the Lincoln Memorial in Washington, D.C. before 75,000 guests - after being denied the opportunity to perform in the Constitution Hall."] },
    { year: "1942", items: ["The Tuskegee Airmen are initiated as the first African-American flying unit in the U.S. military."] },
    { year: "1944", items: ["United Negro College Fund (UNCF) is established."] },
    { year: "1947", items: ["Jackie Robinson becomes the first African-American to play in major league professional baseball."] },
    { year: "1954", items: ["Supreme Court rules on the Brown vs. Board of Education case, ending segregation of schools."] },
    { year: "1955", items: ["The modern Civil Rights movement begins with the bus boycott in Montgomery, AL, sparked by Rosa Parks."] },
    { year: "1957", items: ["\"Little Rock Nine\" integrate Little Rock Central High School."] },
    { year: "1958", items: ["The Alvin Ailey American Dance Theatre is founded."] },
    { year: "1959", items: ["Motown Records is founded by Berry Gordy, Jr."] },
    { year: "1960", items: ["Student \"sit-in\" protests in Greensboro, NC spark a wave of \"sit-ins\" that forced the desegregation of stores, supermarkets, libraries, and movie theatres nationwide."] },
    { year: "1963", items: ["Dr. Martin Luther King delivers the famed I Have a Dream speech at the March on Washington."] },
    { year: "1967", items: ["Thurgood Marshall becomes the first African-American appointed to the U.S. Supreme Court."] },
    { year: "1968", items: ["Shirley Chisholm becomes the first African-American woman elected to Congress."] },
    { year: "1969", items: ["Jazz legend Louis Armstrong makes his final film appearance in \"Hello Dolly!\""] },
    { year: "1970", items: ["Carl Brashear becomes the first African-American Master Chief diver in the U.S. Navy."] },
    { year: "1974", items: ["Hank Aaron hits his 715th home run, breaking professional baseball's record for the most career home runs."] },
    { year: "1977", items: ["Alex Haley's Roots premieres on network television, becoming one of the most-watched television shows in history."] },
    { year: "1978", items: ["U.S. Postal Service unveils the Black Heritage Series of stamps."] },
    { year: "1983", items: ["The birthday of Martin Luther King, Jr. is declared a national holiday in the U.S."] },
    { year: "1988", items: ["Debi Thomas is the first African-American to win a medal in the Winter Olympics figure skating competition."] },
    { year: "1992", items: ["Dr. Mae Jemison, NASA's first African-American female astronaut, becomes the first African-American woman in space."] },
    { year: "1993", items: ["Dr. Maya Angelou presents \"On the Pulse of the Morning\" at the Inauguration ceremony for President Bill Clinton."] },
    { year: "1995", items: ["Men from all over the country convene in Washington, D.C. for the Million Man March, a day of atonement and reconciliation."] },
    { year: "2000", items: ["Venus and Serena Williams become the first sisters to win an Olympic gold medal in tennis doubles."] },
    { year: "2001", items: ["Colin Powell becomes the first African-American U.S. Secretary of State."] },
    { year: "2002", items: ["Denzel Washington and Halle Berry become the first African-American actors to win the top Academy Awards in the same year."] }
];

timelinesData.forEach(timeline => {
    if (timeline.id === 'us-history') {
        timeline.detailedContent = usHistoryContent;
    } else if (timeline.id === 'wa-history') {
        timeline.detailedContent = [
            { year: "Past", items: ["Since Time Immemorial – Indigenous Stewardship: Coast Salish nations (including Duwamish, Puyallup, Suquamish, Nisqually, and others) have lived in reciprocal relationship with the land and water, practicing complex governance, trade, and cultural traditions."] },
            { year: "1774–1792", items: ["First contact with Spanish and British explorers; smallpox and other diseases devastate Indigenous populations; maritime traders and military units arrive with their property, including enslaved Africans."] },
            { year: "1776–1783", items: ["American Revolution: Black and Native soldiers fight for both the U.S. and Britain. After the war, some veterans migrate west with enslaved people in tow."] },
            { year: "1836", items: ["Narcissa Whitman and her husband, Marcus Whitman, establish the Whitman Mission near present-day Walla Walla, becoming some of the first documented European-American settlers in the region."] },
            { year: "1853", items: ["Jane Garrison (née Putte-Pash), a Duwamish woman and niece of Chief Seattle, marries African American settler John Garrison; they acquire land and establish a multiracial homestead in Kitsap County."] },
            { year: "1854–1855", items: ["Treaty signings (under coercion) cede millions of acres to the U.S. The Medicine Creek Treaty (1854) and Point Elliott Treaty (1855) remove Coast Salish peoples from ancestral lands under threat of military violence.; tribes retain hunting, fishing, and land rights—but these are ignored for decades."] },
            { year: "1855–1858", items: ["Indigenous tribes fight back against broken treaty promises and violent encroachment by settlers in Puget Sound and Yakama Wars. The resistance, though unsuccessful in the short term, set the stage for future legal battles over land and sovereignty"] },
            { year: "1855", items: ["Following treaty wars, Black and Native families (including intermarried households) are forced to migrate within the region — some north to Canada, others to avoid racial violence."] },
            { year: "1858", items: ["Jeremiah Borst becomes the first permanent white settler in the upper Snoqualmie Valley, contributing to the development of agriculture and infrastructure in the region."] },
            { year: "1860s", items: ["Black settlers begin arriving through Oregon Trail and sea routes, including formerly enslaved people seeking refuge in Pacific Northwest territories."] },
            { year: "1865–1877 (Reconstruction Era)", items: ["After emancipation, Black communities seek education and land. Washington Territory, not yet a state, offers limited but real opportunities."] },
            { year: "1861–1865", items: ["Civil War: Some enslavers flee west, bringing Black labor with them. The postwar influx of Union loyalists further entrenches settler control."] },
            { year: "1870s", items: ["Black educators and families settle in Kitsap, Pierce, and King Counties."] },
            { year: "1880s–1890s", items: ["White labor groups like the Knights of Labor and other unions push for the 8-hour day. Some local industries begin adopting shorter workdays, especially in construction and rail."] },
            { year: "1885", items: ["Tacoma Riot: A mob, including city officials, forcibly expels the entire Chinese community from Tacoma, burning their homes and businesses. This event, known as the \"Tacoma Method,\" is part of a broader pattern of anti-Chinese violence in the region."] },
            { year: "1886", items: ["Seattle Riot: Similar anti-Chinese sentiment leads to the forced removal of Chinese residents from Seattle, with many being placed on ships bound for San Francisco."] },
            { year: "1887", items: ["George Putnam Riley, African American activist and orator, relocates to Tacoma and purchases 67 acres in the Alliance Addition (now Hilltop), fostering a thriving Black community."] },
            { year: "1889", items: ["Washington becomes a state; white settlers dominate politics, economy, and land ownership. Indigenous children are subjected to assimilation policies, including forced attendance at boarding schools."] },
            { year: "1897", items: ["Jane A. Ruley becomes the first Black teacher in Kitsap County. Her migration reflects the broader post–Civil War movement of Black families seeking land, education, and freedom in the western territories."] },
            { year: "1901", items: ["Skilled white tradesmen in Seattle—carpenters, bricklayers, and machinists—organized through the AFL to secure better wages and work-hour limits. These victories primarily served white workers and did not extend to Asian or Black laborers."] },
            { year: "Early 1900s", items: ["Pacific Islander migration to Washington begins with Samoans, Tongans, and Filipinos moving to the state to work in the fishing and agricultural industries. They face racial discrimination but form tight-knit communities in urban areas like Seattle and Tacoma."] },
            { year: "1907", items: ["White timber workers in Washington organized strikes that led to better pay and improved safety measures. These unions typically barred people of color and reinforced racial exclusion in the industry."] },
            { year: "1907", items: ["Bellingham Riot violently targets South Asian workers."] },
            { year: "1910", items: ["White women working in canneries in Seattle began organizing for better sanitary conditions and pay. These efforts helped white women gain workplace protections while often ignoring or excluding women of color doing similar labor."] },
            { year: "1910s–1920s", items: ["Mexican families begin migrating to Washington to work in railroad construction and agriculture, especially in Yakima Valley, Walla Walla, and the Columbia Basin. Early communities face segregation in schools, housing, and labor."] },
            { year: "1910", items: ["Washington women fight for suffrage, and in 1910, Washington became the fifth state to grant women the right to vote. This victory came after decades of organizing by suffragists and activists, including Martha G. Allen and Emma Smith DeVoe."] },
            { year: "1914–1918", items: ["World War I fuels industrial growth. Black and Brown people serve in segregated units while also building roads, ports, and infrastructure in WA. This boosts local industries. War industries attract labor migration but uphold Jim Crow hierarchies."] },
            { year: "1916–1919", items: ["During WWI, white shipbuilders and dockworkers in Washington gained significant improvements in working conditions. The 1919 Seattle General Strike, led by white unions, demonstrated worker solidarity—but did not include or advocate for Black, Asian, or Indigenous workers."] },
            { year: "1916–1920s", items: ["Black migration to Seattle and Tacoma expands; segregation shapes housing and jobs."] },
            { year: "1920s–1930s", items: ["Large waves of Filipino workers arrive in Washington, especially to work in the agricultural industry, primarily in the Yakima Valley. This was in response to labor shortages due to the exclusion of Chinese, Japanese, and other immigrants"] },
            { year: "1924", items: ["The 1924 Immigration Act established national origins quotas, severely restricting immigration from countries in Asia, including Japan. As a result, Japanese immigrants were effectively excluded from entering the U.S. and faced barriers to naturalization, as they were not eligible for citizenship under U.S. law at the time."] },
            { year: "1934", items: ["Indian Reorganization Act grants tribes limited self-governance."] },
            { year: "1935", items: ["Filipino-led cannery and farmworker unions challenge racial exploitation in agriculture."] },
            { year: "1935–1937", items: ["With the passage of the Wagner Act, white-majority unions gained legal power to organize. The rise of white-led unions under the Congress of Industrial Organizations (CIO) brought thousands into union ranks, while workers of color were largely left out or marginalized."] },
            { year: "1941–1945", items: [
                "World War II: Black, Indigenous, Filipinos and Samoans, and Asian American soldiers build military bases, shipyards, roads, and housing that still shape WA today. Many were drafted into labor under racist restrictions. Japanese Americans are incarcerated. Bremerton and Seattle swell with war migrants and segregated labor camps.",
                "Richland: Created to house Hanford workers for the Manhattan Project.",
                "Sinclair Park (Bremerton): Segregated housing for Black shipyard workers.",
                "Salishan (Tacoma): Integrated war worker housing.",
                "Duwamish Bend (Seattle): Temporary housing for aircraft/shipyard workers.",
                "Camp Hathaway (Vancouver) & Camp George Jordan (Seattle): Black military labor camps.",
                "DuPont Village & Fort Worden: Expanded military facilities."
            ] },
            { year: "1942", items: ["The migration of Black laborers into the city for war-related jobs exacerbates tensions between Black workers and the white working class. The competition for jobs, housing, and resources temporarily elevates Black labor but sparks racial inequality, violence, and segregation. The lack of recognition for their sacrifices, coupled with persistent racial inequality, sparks disillusionment and helps lay the groundwork for the Civil Rights Movement."] },
            { year: "1942–1945", items: ["During WWII, white women entered wartime industries in large numbers and, through white-dominated unions, secured equal pay in many sectors. However, many women of color were restricted to lower-paid, non-unionized jobs or denied entry altogether."] },
            { year: "1942–1964", items: ["Bracero Program: During WWII and beyond, thousands of Mexican workers are brought to Washington under the Bracero Program to work in farms, railroads, and orchards. Though essential to food production, they face wage theft, discrimination, and unsafe housing conditions."] },
            { year: "1942", items: ["Japanese Americans in Washington are forcibly removed and incarcerated during WWII."] },
            { year: "1943", items: ["Marie and Elwood Greer, along with Lillian and James Walker, establish the Bremerton branch of the NAACP, working to eliminate segregation policies and support Black families in Sinclair Heights."] },
            { year: "1950s–1960s", items: ["Black-led civil rights groups in Seattle, such as the Congress of Racial Equality, challenge school segregation and police brutality."] },
            { year: "1950s–1960s", items: ["Mexican and Mexican American workers settle permanently in Yakima, Pasco, Sunnyside, and Toppenish. Children attend segregated schools. Latino workers often face exclusion from labor protections."] },
            { year: "1960s", items: ["The civil rights movements, including the fight for LGBTQ+ rights, began to take hold. Washington saw early pioneers, like Bob McDonald (a prominent activist), fighting for social change."] },
            { year: "1967", items: ["The United Farm Workers (UFW) under Cesar Chavez and Dolores Huerta, in solidarity with Filipino workers, lead national grape boycotts that reach Washington. Farmworker organizing in the Yakima Valley gains momentum."] },
            { year: "1964–1970s", items: ["The Fish Wars: Native activists, including Billy Frank Jr., are repeatedly arrested for asserting treaty fishing rights, leading to the 1974 Boldt Decision, which reaffirms tribes' rights to half of all fish harvests."] },
            { year: "1970", items: ["The United Farm Workers of Washington State is founded by activists like Tomas Villanueva. The union organizes strikes in the Yakima Valley to demand better pay, safe working conditions, and union recognition."] },
            { year: "1960s–1970s", items: ["The Pacific Islander community in Washington grows, especially among Filipinos and Samoans, who migrate for better educational and economic opportunities. They begin advocating for improved representation, educational access, and recognition of their contributions to Washington's labor economy."] },
            { year: "1960s–1970s", items: ["United Farm Workers in Washington: The UFW, particularly in Yakima, faced a long struggle to gain fair wages and better working conditions for migrant workers, including Mexican, Filipino, and Indigenous farm workers. The UFW's strikes and boycotts against grape producers gained national attention and led to lasting changes in labor rights."] },
            { year: "1972", items: ["El Centro de la Raza is founded in a former school in Seattle, becoming a powerful Latinx organizing hub."] },
            { year: "1974", items: ["Native American activists, including Billy Frank Jr., fought for the recognition of their treaty rights to fish, culminating in the Boldt Decision, which ruled that tribes were entitled to 50% of the fish harvests in Washington. This landmark victory affirmed tribal sovereignty and rights to natural resources."] },
            { year: "1980s", items: ["Tacoma Chinese Reconciliation Park is established to acknowledge the expulsion of Chinese residents in the 1880s, promoting peace and harmony."] },
            { year: "1982", items: ["Dr. Maxine Mimms establishes the Evergreen State College's Tacoma campus, providing higher education opportunities for African American adults and fostering community development."] },
            { year: "1986", items: ["Immigration Reform and Control Act (IRCA) legalizes thousands of undocumented Latino immigrants in WA but also increases workplace raids and tensions."] },
            { year: "1988", items: ["The Civil Liberties Act of 1988 grants reparations to Japanese Americans who were interned during the war."] },
            { year: "1990s", items: ["Tribal leaders and activists in Washington worked to block the construction of dams that would disrupt their fishing practices and cultural heritage, leading to significant advocacy for environmental and cultural preservation."] },
            { year: "1991", items: ["Rodney King beating sparks Black-led protests in Seattle; police accountability becomes a central issue."] },
            { year: "1994", items: ["Kitsap County Chronicles begin documenting Black community news and organizing efforts."] },
            { year: "2001–2010", items: ["Muslim communities in Seattle and Tukwila experience increased surveillance and Islamophobia following the events of 9/11."] },
            { year: "2012", items: ["Washington legalizes same-sex marriage and marijuana, marking significant shifts in social policies."] },
            { year: "2014–2020", items: ["Black Lives Matter chapters emerge in Seattle, Tacoma, and Olympia in response to police killings of Black residents like Che Taylor and Manuel Ellis."] },
            { year: "2020", items: ["The Capitol Hill Occupied Protest (CHOP) forms in Seattle following George Floyd’s murder, bringing national attention to racial justice activism in Washington."] },
            { year: "Ongoing", items: ["Tribes assert sovereignty in environmental protection, housing, and cultural preservation; debates around police accountability, reparations, and land return continue."] }
        ];
    } else if (timeline.id === 'aa-history') {
        timeline.detailedContent = aaHistoryContent;
    } else { // Minimal placeholder for others
         timeline.detailedContent = placeholderYears.slice(0,5).map(year => ({ // show a few years
            year,
            items: [`Placeholder event for ${year} in ${timeline.title}.`]
        }));
    }
});

const Timelines = () => {
    const [selectedTimelineId, setSelectedTimelineId] = useState(null);

    const handleTimelineSelect = (timelineId) => {
        setSelectedTimelineId(timelineId);
    };

    const selectedTimelineData = timelinesData.find(t => t.id === selectedTimelineId);


const ScrollableTimelineView = ({ data }) => {
    const [activeYear, setActiveYear] = useState(data.length > 0 ? data[0].year : null);
    const sectionRef = useRef(null);
    const navRef = useRef(null);
    const milestoneRefs = useRef({});

    // Basic click handler for now, more complex scroll logic later
    const handleNavClick = (year) => {
        setActiveYear(year);
        const targetMilestone = milestoneRefs.current[year];
        if (targetMilestone && sectionRef.current) {
             targetMilestone.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    // Effect for scroll spy (simplified for now)
    useEffect(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) return;

        const handleScroll = () => {
            let currentClosestYear = activeYear;
            let smallestDistance = Infinity;

            data.forEach(entry => {
                const milestoneElement = milestoneRefs.current[entry.year];
                if (milestoneElement) {
                    const rect = milestoneElement.getBoundingClientRect();
                    const sectionRect = currentSection.getBoundingClientRect();
                    if (rect.top >= sectionRect.top && rect.top < sectionRect.top + sectionRect.height / 2) {
                         const distanceToTop = Math.abs(rect.top - sectionRect.top);
                         if (distanceToTop < smallestDistance) {
                            smallestDistance = distanceToTop;
                            currentClosestYear = entry.year;
                        }
                    }
                }
            });
            if (activeYear !== currentClosestYear) {
                 setActiveYear(currentClosestYear);
            }
        };

        currentSection.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => currentSection.removeEventListener('scroll', handleScroll);
    }, [data, activeYear]);

    // Auto-scroll active nav item into view
    useEffect(() => {
        if (navRef.current && activeYear) {
            const activeNavItem = navRef.current.querySelector(`[data-year="${activeYear}"]`);
            if (activeNavItem) {
                activeNavItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
            }
        }
    }, [activeYear]);


    if (!data || data.length === 0) {
        return <p>No timeline data available.</p>;
    }

    return (
        <div className="remnant-timeline-container">
            <nav className="remnant-timeline__nav" ref={navRef}>
                <ul>
                    {data.map(entry => (
                        <li
                            key={entry.year}
                            className={activeYear === entry.year ? 'active' : ''}
                            onClick={() => handleNavClick(entry.year)}
                            data-year={entry.year}
                        >
                            <span>{entry.year}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="remnant-timeline__section" ref={sectionRef}>
                <div className="remnant-timeline__content-wrapper">
                    {data.map(entry => (
                        <div
                            key={entry.year}
                            className="remnant-timeline__item"
                            ref={el => milestoneRefs.current[entry.year] = el}
                        >
                            <h2 className="remnant-timeline__milestone">{entry.year}</h2>
                            {entry.items.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

    return (
        <>
            <main className="container my-5" id="main-content">
                <h1>Timelines</h1>
                <p className="lead">Explore historical events in chronological order to better understand their context and relationships.</p>

                <Row>
                    {timelinesData.map((timeline) => (
                        <Col md={4} key={timeline.id}>
                            <Card
                                onClick={() => handleTimelineSelect(timeline.id)}
                                style={{ cursor: 'pointer' }}
                                className={`timeline-selection-card ${selectedTimelineId === timeline.id ? 'shadow-sm selected-timeline-card' : 'shadow-sm'}`}
                            >
                                <Card.Img variant="top" src={timeline.imgSrc} alt={timeline.altText} />
                                <Card.Body>
                                    <Card.Title
                                        className={selectedTimelineId === timeline.id ? 'selected-timeline-title' : ''}
                                    >
                                        {timeline.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col>
                        <Card className="mt-4 remnant-timeline-card-outer">
                            <Card.Body className="remnant-timeline-card-body">
                                {selectedTimelineData ? (
                                    <>
                                        <Card.Title>{selectedTimelineData.title}</Card.Title>
                                        {selectedTimelineData.detailedContent && selectedTimelineData.detailedContent.length > 0 ? (
                                            <ScrollableTimelineView data={selectedTimelineData.detailedContent} />
                                        ) : (
                                            <p style={{ padding: '1rem', textAlign: 'center' }}>Detailed timeline content is not available for this topic yet.</p>
                                        )}
                                    </>
                                ) : (
                                    <div style={{ padding: '1rem', textAlign: 'center', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Card.Title as="h3">Timeline</Card.Title>
                                        <br></br>
                                        <br></br>
                                        <p>Please select one of the three topics above to view its timeline.</p>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>
        </>
    );
};

export default Timelines;