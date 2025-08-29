import requests
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get("city", "Islamabad")  # default city

    try:
        # 🔹 1) Get weather from wttr.in
        url = f"https://wttr.in/{city}?format=j1"
        response = requests.get(url, timeout=5)
        data = response.json()
        current = data["current_condition"][0]

        # 🔹 2) Get country info from OpenStreetMap Nominatim API
        geo_url = f"https://nominatim.openstreetmap.org/search?city={city}&format=json&limit=1"
        geo_res = requests.get(geo_url, headers={"User-Agent": "weather-app"})
        geo_data = geo_res.json()

        country = geo_data[0]["display_name"].split(",")[-1].strip() if geo_data else "Unknown"

        # 🔹 3) Combine results
        weather_data = {
            "city": city,
            "country": country,
            "temperature": current["temp_C"],
            "humidity": current["humidity"],
            "wind": current["windspeedKmph"],
            "description": current["weatherDesc"][0]["value"],
        }

        return jsonify(weather_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
