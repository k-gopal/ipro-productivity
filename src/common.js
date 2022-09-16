const openInNewTab = (url) => {
    try {
        window.open(url, '_blank');
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = {
    openInNewTab,
};
