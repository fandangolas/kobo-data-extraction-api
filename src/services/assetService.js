const assetService = ({ assetsDataRepository, assetsRepository }) => {
  const saveAsset = async (asset, data) => {
    const { insertedId: assetInsertionId } = await assetsRepository
      .createAsset({ asset });

    const { insertedId: assetDataInsertionId } = await assetsDataRepository
      .createAssetData({ data });

    //TODO: Do these repository operations in a transaction scope

    return {
      insertionInfo: {
        asset: assetInsertionId,
        data: assetDataInsertionId
      }
    }
  }

  return { saveAsset };
}

export default assetService;