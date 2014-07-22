package MarsCommon.DataTypes;

import MarsInterfaces.DataTypes.IComment;

public class Comment implements IComment {
	protected String content;
	
	public Comment(String content)
	{
		this.content = content;
	}
	@Override
	public String GetContent() {
		return this.content;
	}

}
