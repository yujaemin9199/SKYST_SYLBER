function flowergrow(flower, count, growth, callback) {
    console.log(count);

    if (count === 0) {
        callback();
        return;
    }

    setTimeout(() => {
        flowergrow(count-1, callback);
    }, 1000);
}

module.exports = flowergrow;