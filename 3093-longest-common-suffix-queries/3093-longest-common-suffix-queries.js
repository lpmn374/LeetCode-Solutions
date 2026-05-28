/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    // 1. Tìm từ có độ dài ngắn nhất, index nhỏ nhất trong container để làm từ mặc định
    let defaultBestIdx = 0;
    for (let i = 1; i < wordsContainer.length; i++) {
        if (wordsContainer[i].length < wordsContainer[defaultBestIdx].length) {
            defaultBestIdx = i;
        }
    }

    // 2. Định nghĩa cấu trúc cây Trie dạng Object đơn giản
    // Mỗi node sẽ lưu: { c: các node con, bestIdx: index của từ tối ưu nhất đi qua nhánh này }
    const root = { c: {}, bestIdx: defaultBestIdx };

    // 3. Hàm thêm một từ (đã đảo ngược) vào cây Trie
    const insert = (word, wordIdx) => {
        let node = root;
        // Duyệt ngược từ cuối chuỗi lên đầu để xử lý Suffix (Đuôi)
        for (let i = word.length - 1; i >= 0; i--) {
            const char = word[i];
            if (!node.c[char]) {
                node.c[char] = { c: {}, bestIdx: wordIdx };
            }
            node = node.c[char];
            
            // Cập nhật lại từ tốt nhất cho node này theo luật đề bài
            const currBestIdx = node.bestIdx;
            if (word.length < wordsContainer[currBestIdx].length || 
               (word.length === wordsContainer[currBestIdx].length && wordIdx < currBestIdx)) {
                node.bestIdx = wordIdx;
            }
        }
    };

    // Build cây Trie từ wordsContainer
    for (let i = 0; i < wordsContainer.length; i++) {
        insert(wordsContainer[i], i);
    }

    // 4. Hàm tìm kiếm đuôi chung dài nhất trên cây Trie
    const search = (query) => {
        let node = root;
        // Duyệt ngược từ cuối chuỗi truy vấn
        for (let i = query.length - 1; i >= 0; i--) {
            const char = query[i];
            if (!node.c[char]) break; // Gãy nhánh giữa chừng -> Trả về từ tốt nhất hiện tại
            node = node.c[char];
        }
        return node.bestIdx;
    };

    // Trả về kết quả cho từng truy vấn
    return wordsQuery.map(query => search(query));
};