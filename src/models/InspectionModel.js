export class InspectionModel {
  constructor(id, address, inspections, completed ) {
    this.id = id;
    this.completed = completed;
    this.address = new AddressModel(address);
    this.inspections = new Array(new ReportsModel(inspections[0]));
  }
}

export class AddressModel {
  constructor(address) {
    this.street = address.street;
    this.housenumber = address.housenumber;
    this.zipcode = address.zipcode;
    this.residence = address.residence;
  }
}

export class ReportsModel{
  constructor(inspections){
    this.id = inspections.id;
    this.date = inspections.date;
    this.damageReport = new DamageReportModel(inspections.damageReport);
    this.maintenanceReport = new MaintenanceModel(
      inspections.maintenanceReport
    );
    this.installationsReport = new InstallationModel(
      inspections.installationsReport
    );
    this.modificationsReport = new ModificationsModel(
      inspections.modificationsReport
    );
  }
}

export class DamageReportModel {
  constructor(damage) {
    this.damPerform = damage.damPerform;
    this.damLocation = damage.damLocation;
    this.damNew = damage.damNew ? damage.damNew : false;
    this.damType = damage.damType;
    this.damDate = damage.damDate;
    this.damAcuteAction = damage.damAcuteAction ? damage.damAcuteAction : false;
    this.damDescription = damage.damDescription;
    this.damPhoto1 = damage.damPhoto1;
    this.damPhoto2 = damage.damPhoto2;
  }
}

export class MaintenanceModel {
  constructor(maintenance) {
    this.maintPerform = maintenance.maintPerform;
    this.maintLocation = maintenance.maintLocation;
    this.maintType = maintenance.maintType;
    this.maintAcuteAction = maintenance.maintAcuteAction ? maintenance.maintAcuteAction : false;
    this.maintCost = maintenance.maintCost;
    this.maintPhoto1 = maintenance.maintPhoto1;
    this.maintPhoto2 = maintenance.maintPhoto2;
  }
}

export class InstallationModel {
  constructor(installations) {
    this.techPerform = installations.techPerform;
    this.techLocation = installations.techLocation;
    this.techType = installations.techType;
    this.techMalfunction = installations.techMalfunction;
    this.techTestProcedure = installations.techTestProcedure;
    this.techApproved = installations.techApproved ? installations.techApproved : false;
    this.techComments = installations.techComments;
    this.techPhoto1 = installations.techPhoto1;
    this.techPhoto2 = installations.techPhoto2;
  }
}

export class ModificationsModel {
  constructor(modifications) {
    this.modiPerform = modifications.modiPerform;
    this.modiSituation = modifications.modiSituation;
    this.modiLocation = modifications.modiLocation;
    this.modiPerformedBy = modifications.modiPerformedBy;
    this.modiDescription = modifications.modiDescription;
    this.modiAction = modifications.modiAction;
    this.modComments = modifications.modComments;
    this.modPhoto1 = modifications.modPhoto1;
    this.modPhoto2 = modifications.modPhoto2;
  }
}
