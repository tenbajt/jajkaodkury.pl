import React from "react";
import Helmet from "react-helmet";
import Styled from "styled-components";
import Section from "../tenbajt/components/Section";
import ZoneRate from "../components/ZoneRate";
import ZoneCities from "../components/ZoneCities";
import Background from "../tenbajt/components/Background";
import SmoothsSroll from "smoothscroll-polyfill";
import GlobalStyles from "../tenbajt/GlobalStyles";
import OrderDetails from "../components/OrderDetails";
import ContactButton from "../components/ContactButton";
import { color, shadow, breakpoint } from "../tenbajt/Utils";


if (typeof window !== "undefined") {
    SmoothsSroll.polyfill();
}

const HeroGrid = Styled(Section)`
    height: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
`;

const HeroContentGrid = Styled.div`
    margin-bottom: 8rem;
`;

const HeroHeading = Styled.h1`
    color: ${color.coolGray(900)};
    margin: 0;
    padding: 1.5rem 2rem;
    font-size: 2.25rem;
    text-align: center;
    font-weight: 800;
    line-height: 2.5rem;
    grid-column: 1 / span 3;
    background-color: ${color.white(0.7)};
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;

    ${breakpoint.md} {
        font-size: 3rem;
        line-height: 1;
    }
`;

const HeroButtonGroup = Styled.div`
    gap: 0.25rem;
    display: grid;
    overflow: hidden;
    margin-top: 0.25rem;
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    
    ${breakpoint.sm} {
        justify-content: center;
        grid-template-columns: repeat(3, 1fr);
    }
`

const ScrollDownButton = Styled.button`
    left: 50%;
    color: ${color.coolGray(900)};
    bottom: 2.25rem;
    padding: 0.75rem 2rem;
    position: absolute;
    font-size: 1rem;
    transform: translateX(-50%);
    box-shadow: ${shadow.lg};
    font-weight: 500;
    line-height: 1.5rem;
    white-space: nowrap;
    border-radius: 2rem;
    background-color: ${color.white()};

    &:hover {
        color: ${color.coolGray(700)};
        background-color: ${color.coolGray(100)};
    }
    
    ${breakpoint.md} {
        padding: 1rem 2.5rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`;

const ScrollDownArrow = Styled.i`
    left: 50%;
    color: ${color.white()};
    cursor: default;
    bottom: 0.5rem;
    position: absolute;
    font-size: 2rem !important;
    transform: translateX(-50%);
    text-shadow: 0 1px 0 ${color.black()};
`;

const ZoneMapGrid = Styled(Section)`
    ${breakpoint.sm} {
        display: grid;
        column-gap: 2rem;
        align-items: center;
        grid-template-columns: repeat(12, 1fr);
    }
`;

const ZoneRatesGrid = Styled.div`
    row-gap: 0.75rem;
    display: grid;
    overflow: hidden;
    column-gap: 3rem;
    grid-column: 1 / span 5;
    margin-bottom: 3rem;
    justify-content: center;
    grid-template-columns: repeat(2, auto);

    ${breakpoint.sm} {
        row-gap: 1.5rem;
        grid-column: 1 / span 5;
        margin-bottom: 6rem;
        justify-content: start;
    }
`;

const ZoneRatesSeparator = Styled.hr`
    border-top: 2px dashed ${color.gray(300)};
    grid-column: 1 / span 2;
`;

const ZoneRatesMap = Styled.img`
    ${breakpoint.sm} {
        grid-column: 6 / span 7;
    }
`;

const OrderDetailsGrid = Styled.div`
    display: grid;
    box-shadow: ${shadow.base};
    border-radius: 0.75rem;
    background-color: white;

    ${breakpoint.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ZoneCitiesGrid = Styled(Section)`
    row-gap: 2rem;
    display: grid;
    column-gap: 3rem;

    ${breakpoint.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Footer = Styled(Section)`
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const Copyrights = Styled.p`
    color: ${color.gray(500)};
    font-size: 0.75rem;
    line-height: 1rem;
`;

const HomePage = () => {
    const zoneMapRef = React.useRef(null);

    const scrollToZoneMap = () => zoneMapRef.current.scrollIntoView({behavior: "smooth", block: "center"});

    return (
        <React.Fragment>
            <Helmet>
                <title>Jajka prosto od kury z wolnego wybiegu - 100% naturalne | Zamów z dostawą do domu!</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
                <link rel="icon" href="/images/logo/32x32.jpg" size="32x32"/>
                <link rel="icon" href="/images/logo/192x192.jpg"sizes="192x192"/>
                <link rel="apple-touch-icon" href="/images/logo/180x180.jpg"/>
                <meta name="msapplication-TileImage" content="/images/logo/270x270.jpg"/>
            </Helmet>
            <GlobalStyles/>
            <main>
                <HeroGrid>
                    <Background style={{background: "url(/images/hero-background.jpg) center/cover no-repeat"}}/>
                    <HeroContentGrid>
                        <HeroHeading>
                            Zmieniamy <span style={{color: color.yellow(300)}}>się</span> na lepsze
                        </HeroHeading>
                        <HeroButtonGroup>
                            <ContactButton
                                url="tel:+48536296895"
                                icon="phone_iphone"
                                label="536 296 895"/>
                            <ContactButton
                                alt="Facebook"
                                url="https://www.facebook.com/jajkaodkury"
                                image="/images/social/facebook.png"
                                label="@jajkaodkury"/>
                            <ContactButton
                                alt="Instagram"
                                url="https://www.instagram.com/jajka_od_kury/"
                                image="/images/social/instagram.png"
                                label="@jajka_od_kury"/>
                        </HeroButtonGroup>
                    </HeroContentGrid>
                    <ScrollDownButton onClick={scrollToZoneMap}>
                        Sprawdź szczegóły dostaw
                    </ScrollDownButton>
                    <ScrollDownArrow className="material-icons">
                        expand_more
                    </ScrollDownArrow>
                </HeroGrid>
                <ZoneMapGrid ref={zoneMapRef}>
                    <ZoneRatesGrid>
                        <ZoneRate
                            value="1 zł"
                            label="Koszt dostawy"
                            color={color.yellow(300)}/>
                        <ZoneRate
                            value="10 zł"
                            label={"Minimalna wartość\nzamówienia"}
                            color={color.yellow(300)}/>
                        <ZoneRatesSeparator/>
                        <ZoneRate
                            value="10 zł"
                            label="Koszt dostawy"
                            color={color.yellow(600)}/>
                        <ZoneRate
                            value="100 zł"
                            label={"Minimalna wartość\nzamówienia"}
                            color={color.yellow(600)}/>
                    </ZoneRatesGrid>
                    <ZoneRatesMap src="/images/delivery-map.svg" alt="Mapa stref dostaw"/>
                </ZoneMapGrid>
                <Section>
                    <Background style={{backgroundColor: color.gray(50)}}/>
                    <OrderDetailsGrid>
                        <OrderDetails
                            icon="local_shipping"
                            text="Dostawy realizujemy własnym transportem w wyznaczonych strefach dostaw w godzinach:"
                            title="Dostawy"
                            timeFrame="06:00 - 22:00"
                            activeWeekDays={["PN", "ŚR", "PT"]}/>
                        <OrderDetails
                            icon="support_agent"
                            text="Zamówienia przyjmujemy telefonicznie lub poprzez komunikator Facebook Messenger® w godzinach:"
                            title="Zamówienia"
                            timeFrame="08:00 - 20:00"
                            activeWeekDays={["PN", "WT", "ŚR", "CZ", "PT", "SO", "ND"]}/>
                    </OrderDetailsGrid>
                </Section>
                <ZoneCitiesGrid>
                    <ZoneCities label="Strefa 1" indicator={color.yellow(300)} cities="Poznań, Babki, Borówiec, Czapury, Dachowa, Daszewice, Gądki, Jaryszki, Kamionki,
                            Koninko, Robakowo, Skrzynki, Szczytniki, Wiórek, Baranowo, Bogucin, Chyby, Dąbrówka, Dopiewiec,
                            Dopiewo, Garby, Głuchowo, Gołuski, Gowarzewo, Jasin, Jelonek, Kiekrz, Komorniki, Koziegłowy,
                            Kórnik, Kruszewnia, Luboń, Łęczyca, Palędzie, Plewiska, Przeźmierowo, Puszczykowo, Rabowice,
                            Rogalinek, Rosnowo, Sasinowo, Skórzewo, Suchy Las, Swadzim, Swarzędz, Szewce, Tanibórz, Tulce,
                            Wiry, Wysogotowo, Zalasewo, Złotniki, Żerniki, Cerekwica, Napachanie, Mrowino, Rokietnica,
                            Tarnowo Podgórne."/>
                    <ZoneCities label="Strefa 2" indicator={color.yellow(600)} cities="Stęszew, Zaniemyśl, Środa wlkp, Kostrzyn wlkp, Jeziory małe, Jeziory wielkie,
                            Topola, Zmysłowo, Urniszewo, Kleszczewo, Paczkowo, Siekierki Wielkie, Siekierki Małe, Trzek,
                            Kobylnica, Gruszczyn, Bugaj, Krzyszkowo, Przecławek, Pamiątkowo."/>
                </ZoneCitiesGrid>
                <Footer>
                    <Background style={{backgroundColor: "black"}}/>
                    <Copyrights>
                        © 2021 BSP Grupa | Wszystkie prawa zastrzeżone.
                    </Copyrights>
                </Footer>
            </main>
        </React.Fragment>
    );
}

export default HomePage;