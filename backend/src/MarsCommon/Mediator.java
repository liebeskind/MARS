package MarsCommon;

import java.util.ArrayList;
import java.util.List;

import MarsCommon.Flow.*;
import MarsInterfaces.DataTypes.*;

public class Mediator {
	protected DAL dal;
	protected List<Receiver> receivers;
	protected List<Sender> senders;
	
	protected Mediator(DAL dal, List<Receiver> receiver, List<Sender> sender)
	{
		this.receivers = receiver;
		this.senders = sender;
		
		this.dal = dal;
		
	}
	
	public void NewIncidentReported(IIncident incident)
	{
		List<IIncident> list = new ArrayList<IIncident>();
		list.add(incident);
		this.dal.Alert(list);
	}
	
	public void UserLocationUpdate(String userId, ILocation location)
	{
		
	}
}
