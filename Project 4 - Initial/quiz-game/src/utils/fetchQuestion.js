export async function fetchQuestion(axios){
    const resp = await axios.get("https://opentdb.com/api.php?amount=1");
    return resp.data.results[0];
}