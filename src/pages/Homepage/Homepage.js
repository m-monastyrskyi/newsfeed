import React, { useState } from 'react'
import './Homepage.styles.scss'
import SinglePost from '../../components/SinglePost'

const samplePosts = [
    {
        'title': 'Kwarantanny o 30 proc. w dwa dni. Czy wpłynie to na gospodarkę? Czy czeka nas lockdown? [ROZMOWA]',
        'thumb': 'https://oko.press/images/2020/10/KH200508_020.jpg',
        'date': '2020-10-23 10:15:53',
        'excerpt': 'Codziennie śledzimy epidemiczne statystyki i słusznie patrzymy na nie z coraz większym niepokojem. Liczba nowych odnotowanych zakażeń, zajętych…',
        'url': 'https://oko.press/kwarantanny-o-30-proc-w-dwa-dni-czy-wplynie-to-na-gospodarke-czy-czeka-nas-lockdown-rozmowa'
    },
    {
        'title': 'Rządzą nami fundamentaliści. Wykorzystali pandemię, żeby kobiety nie mogły wyjść na ulice. Ale wyjdą',
        'thumb': 'https://oko.press/images/2020/10/Gabriela-Morawska-Stanecka_TK.jpg',
        'date': '2020-10-23 08:00:28',
        'excerpt': 'PiS dopiął swego. TK orzekł 22 października 2020 roku, że aborcje ze względu na ciężkie, nieuleczalne, a także śmiertelne wady płodów są…',
        'url': 'https://oko.press/rzadza-nami-fundamentalisci-wykorzystali-pandemie-zeby-kobiety-nie-mogly-wyjsc-na-ulice-ale-wyjda'
    },
    {
        'title': 'To my z OKO.press byliśmy menelami, którzy napadli na sędzię Pawłowicz',
        'thumb': 'https://oko.press/images/2020/10/DSC_0826.jpg',
        'date': '2020-10-23 09:20:39',
        'excerpt': '„Oni są bezkarni, oni mówią, że mają jakąś wolność, że im wolno chodzić, pytać, jakiś suweren, nie wiadomo co, no bandyterka zwykła" -…',
        'url': 'https://oko.press/to-my-z-oko-press-jestesmy-menelami-ktorzy-napadli-na-sedzie-pawlowicz'
    },
    {
        'title': 'Protest w Warszawie po zakazaniu aborcji. Tłum idzie pod dom Kaczyńskiego [AKTUALIZOWANY]',
        'thumb': 'https://oko.press/images/2020/10/Po-wyroku2.jpg',
        'date': '2020-10-23 00:07:27',
        'excerpt': 'Protest relacjonują Dominika Sitnicka, Hanna Szukalska i Anton Ambroziak.\r\n\r\nDominika: Zaczęło się o 19:00 pod Trybunałem Konstytucyjnym, było t…',
        'url': 'https://oko.press/protest-w-warszawie-po-zakazaniu-aborcji-tlum-idzie-pod-dom-kaczynskiego'
    },
    {
        'title': 'Drugi lockdown czy cała Polska w „czerwonej strefie"? I czy leci z nami pilot? [WYKRESY]',
        'thumb': 'https://oko.press/images/2020/10/20201018_raport-pandemia.png',
        'date': '2020-10-22 21:40:37',
        'excerpt': 'W ciągu ostatniej doby na COVID-19 zmarło 168 osób, z których 137 miało choroby współistniejące. To najwyższa liczba od początku epidemii i…',
        'url': 'https://oko.press/drugi-lockdown-czy-cala-polska-w-czerwonej-strefie-i-czy-leci-z-nami-pilot-wykresy'
    },
    {
        'title': 'PiS odrzucił społeczną kandydatkę na Rzecznika Praw Obywatelskich. Nie udzielono jej głosu',
        'thumb': 'https://oko.press/images/2020/10/Rudzinska.jpg',
        'date': '2020-10-22 19:08:04',
        'excerpt': '„Sejm nie wybrał RPO. A ja nie poddaję się. Zdecydowałam się kandydować nie dla polityków, nie dla sławy, a w imię troski o obywateli. 3 mi…',
        'url': 'https://oko.press/pis-odrzucil-spoleczna-kandydatke-na-rzecznika-praw-obywatelskich-nie-udzielono-jej-glosu'
    },
    {
        'title': 'Katolicki radykał, współpracownik Marka Jurka dostał miliony złotych od Ziobry i Glińskiego',
        'thumb': 'https://oko.press/images/2020/10/20200830_fundacja.jpg',
        'date': '2020-10-02 07:51:16',
        'excerpt': '„Nasza propozycja i ponowne wezwanie do obozu rządzącego: wypowiedzieć konwencję stambulską. Zaproponowaliśmy dokument z inicjatywy Marka Jurk…',
        'url': 'https://oko.press/muza-dei-jurek-ziobro-glinski'
    },
    {
        'title': 'Polska piekłem kobiet. PiS i Trybunał Julii Przyłębskiej wprowadzili zakaz aborcji',
        'thumb': 'https://oko.press/images/2020/10/20201022_aborcja-wyrok-tk.jpg',
        'date': '2020-10-22 15:47:35',
        'excerpt': 'Upolityczniony Trybunał Konstytucyjny stwierdził dziś podczas posiedzenia, że aborcja ze względu na "duże prawdopodobieństwo ciężkiego i nieo…',
        'url': 'https://oko.press/polska-pieklem-kobiet-pis-i-trybunal-julii-przylebskiej-wprowadzili-zakaz-aborcji'
    },
    {
        'title': 'Lista hańby. Oto posłowie PiS i Konfederacji, którzy doprowadzili do zakazu aborcji w Polsce',
        'thumb': 'https://oko.press/images/2020/10/Bosak-Konfederacja.jpg',
        'date': '2020-10-22 17:26:29',
        'excerpt': 'Dziś, 22 października 2020 roku, Trybunał Konstytucyjny wydał wyrok w sprawie dopuszczalności przerwania ciąży ze względów embriopatologiczny…',
        'url': 'https://oko.press/lista-hanby-oto-poslowie-pis-i-konfederacji-ktorzy-doprowadzili-do-zakazu-aborcji-w-polsce'
    },
    {
        'title': 'Cudowne rozmnożenie. Ministerstwo wielokrotnie powiększyło dorobek naukowy ministra Czarnka',
        'thumb': 'https://oko.press/images/2020/10/Przemyslaw-Czarnek-1.jpg',
        'date': '2020-10-22 13:41:35',
        'excerpt': 'O dorobku naukowym nowego ministra edukacji i nauki Przemysława Czarnka pisaliśmy w OKO.press parokrotnie (np. tutaj i tutaj). Po oficjalnym zaprzys…',
        'url': 'https://oko.press/ministerstwo-powiekszylo-dorobek-naukowy-ministra-czarnka'
    }
]

const Homepage = () => {
    const [posts, setPosts] = useState(samplePosts)

    return (
        <div className={'container'}>
            <main className={'posts'}>
                {
                    posts.map((post, i) => <SinglePost post={post} key={i}/>)
                }
            </main>
        </div>
    )
}

export default Homepage