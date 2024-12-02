export function MasonrySortingHelper(images, texts, columns) {

    // Helper function: Distribute images based on the height of the columns
    function distributeImagesByHeight(images, columnCount) {
        const columns = Array.from({ length: columnCount }, () => ({
            images: [],
            totalHeight: 0
        }));

        // Function to find the column with the least height
        const getLeastHeightColumn = () => columns.reduce((minColumn, currentColumn) =>
            currentColumn.totalHeight < minColumn.totalHeight ? currentColumn : minColumn
        );

        // Distribute images to columns
        images.forEach(image => {
            const targetColumn = getLeastHeightColumn();
            const imageHeight = image.height || 0;

            targetColumn.images.push(image);
            targetColumn.totalHeight += imageHeight;
        });

        // Return only the arrays of images from the columns
        return columns.map(column => column.images);
    }

    // Helper function: Split an array into 'c' evenly distributed columns
    function distributeItemsByColumns(array, columnCount) {
        const columns = Array.from({ length: columnCount }, () => []);
        array.forEach((item, index) => {
            columns[index % columnCount].push(item);
        });
        return columns;
    }

    // Distribute images and texts into columns
    const imageColumns = distributeImagesByHeight(images, columns);
    let textColumns = distributeItemsByColumns(texts, columns);

    // Adjust the text distribution if there are 3 columns
    if (columns === 3) {
        // Find the index of the text column with the fewest items
        const textWithLeastItemsIndex = textColumns.reduce(
            (minIndex, currentColumn, index) =>
                currentColumn.length < textColumns[minIndex].length ? index : minIndex,
            0
        );

        // Swap the least populated text column with the second text column
        [textColumns[1], textColumns[textWithLeastItemsIndex]] = [
            textColumns[textWithLeastItemsIndex],
            textColumns[1]
        ];
    }

    // Helper function: Distribute texts into gaps between images
    function justifyArrays(images, texts) {
        if (texts.length === 0) return images;

        const totalItems = images.length + texts.length;
        const result = [];
        let textIndex = 0;
        let imageIndex = 0;

        // Determine the approximate number of images between texts
        const imagesPerText = Math.floor(images.length / (texts.length + 1));

        // Add images and texts alternately, with extra images if necessary
        while (imageIndex < images.length || textIndex < texts.length) {
            // Add images before adding text if we have images left
            if (imageIndex < images.length) {
                result.push(images[imageIndex]);
                imageIndex++;
            }

            // Add text if it's time to and we have texts left
            if ((imageIndex % imagesPerText === 0 || imageIndex === images.length) && textIndex < texts.length) {
                result.push(texts[textIndex]);
                textIndex++;
            }
        }

        return result;
    }

    // Justify texts within each image column
    return imageColumns.map((imageColumn, index) => {
        const textColumn = textColumns[index] || [];
        return justifyArrays(imageColumn, textColumn);
    });
}