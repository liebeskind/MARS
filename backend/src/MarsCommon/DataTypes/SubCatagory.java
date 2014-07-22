package MarsCommon.DataTypes;

import MarsInterfaces.DataTypes.ISubCatagory;

public class SubCatagory implements ISubCatagory {	
	protected int value;

	@Override
	public int Get() {
		return this.value;
	}

	@Override
	public void Set(int subCatagory) {
		this.value = subCatagory;
	}

}
