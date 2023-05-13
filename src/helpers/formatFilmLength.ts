export const formatFilmLength = (filmLength: string | null) => {
    if (filmLength !== null) {
      const filmLengthSplite = filmLength.split("")
      const lastSymbol = filmLengthSplite[filmLengthSplite.length - 1]
      if (lastSymbol === "1") {
        return "минута"
      }
      else if (lastSymbol === "2" || lastSymbol === "3" || lastSymbol === "4") {
        return "минуты"
      }
      else if (lastSymbol === "0" || lastSymbol === "5" || lastSymbol === "6" ||
        lastSymbol === "7" || lastSymbol === "8" || lastSymbol === "9") {
        return "минут"
      }
    }
  }