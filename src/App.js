import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
            )
            .then((res) => {
                setCoin(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoin = coin.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="App font-nunito">
            <div className="search p-10">
                <div className="flex items-center w-fit mx-auto mb-8">
                    <h1 className="text-xl">Data fetched from23</h1>
                    <img
                        src="https://landing.coingecko.com/wp-content/uploads/2020/03/CoinGecko.png"
                        alt=""
                        className="w-[200px]"
                    />
                </div>
                <form action="" className="">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input w-[600px] h-10 p-4 border-2 rounded-lg border-white focus:outline-none drop-shadow-md"
                        onChange={handleChange}
                    />
                </form>
            </div>
            {filteredCoin.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        volume={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
}

export default App;
