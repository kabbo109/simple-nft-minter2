const fs = require('fs');

const createMetadata = (id, name, description, image) => {
  const metadata = {
    name: `${name} #${id}`,
    description: description,
    image: image,
    attributes: [
      { trait_type: "Level", value: 5 },
      { trait_type: "Rarity", value: "Legendary" }
    ]
  };
  
  const jsonContent = JSON.stringify(metadata, null, 2);
  
  fs.writeFileSync(`metadata_${id}.json`, jsonContent);
  console.log(`Generated metadata_${id}.json`);
};

// Example usage
createMetadata(1, "CyberPunk", "A futuristic digital asset", "ipfs://QmImageHash");
