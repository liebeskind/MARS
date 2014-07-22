package MarsCommon.DataTypes;

import MarsInterfaces.DataTypes.IComment;
import MarsInterfaces.DataTypes.IDate;
import MarsInterfaces.DataTypes.IIncident;
import MarsInterfaces.DataTypes.ILocation;
import MarsInterfaces.DataTypes.ISubCatagory;
import MarsUtils.IncidentType;

public class Incident implements IIncident {
	protected ILocation location;
	protected IDate date;
	protected IComment comment;
	protected ISubCatagory subCatagory;
	protected IncidentType incidentType;
	protected String userId;
	protected String IncidentId;
	
	public Incident(ILocation location, IDate date, IComment comment, ISubCatagory subCatagory, IncidentType type, String userId)
	{
		this.location = location;
		this.date = date;
		this.comment = comment;
		this.subCatagory = subCatagory;
		this.incidentType = type;
		this.userId = userId;
		this.IncidentId = java.util.UUID.randomUUID().toString();
	}
	
	@Override
	public ILocation GetLocation() {
		return this.location;
	}

	@Override
	public IDate Date() {
		return this.date;
	}

	@Override
	public IComment GetComment() {
		return this.comment;
	}

	@Override
	public ISubCatagory SubCatagory() {
		return this.subCatagory;
	}

	@Override
	public IncidentType Type() {
		return this.incidentType;
	}

	@Override
	public String GetId() {
		return this.IncidentId;
	}

	@Override
	public String GetUserId() {
		return this.userId;
	}

}