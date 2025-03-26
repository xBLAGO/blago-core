import requests

def get_btc_rub():
    url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=rub"
    try:
        response = requests.get(url).json()
        return response["bitcoin"]["rub"]
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    print("Current BTC to RUB:", get_btc_rub())
