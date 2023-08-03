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
    this.damLocation = damage.damLocation;
    this.damNew = damage.damNew ? damage.damNew : false;
    this.damType = damage.damType;
    this.damDate = damage.damDate;
    this.damAcuteAction = damage.damAcuteAction ? damage.damAcuteAction : false;
    this.damDescription = damage.Description;
    this.damPhotos = damage.Photos;
  }
}

export class MaintenanceModel {
  constructor(maintenance) {
    this.maintLocation = maintenance.maintLocation;
    this.maintType = maintenance.maintType;
    this.maintAcuteAction = maintenance.maintAcuteAction ? maintenance.maintAcuteAction : false;
    this.maintCost = maintenance.maintCost;
    this.maintPhotos = maintenance.maintPhotos;
  }
}

export class InstallationModel {
  constructor(installations) {
    this.techLocation = installations.techLocation;
    this.techType = installations.techType;
    this.techMalfunction = installations.techMalfunction;
    this.techTestProcedure = installations.techTestProcedure;
    this.techApproved = installations.techApproved ? installations.techApproved : false;
    this.techComments = installations.techComments;
    this.techPhotos = installations.techPhotos;
  }
}

export class ModificationsModel {
  constructor(modifications) {
    this.modiSituation = modifications.modiSituation;
    this.modiLocation = modifications.modiLocation;
    this.modiPerformedBy = modifications.modiPerformedBy;
    this.modiDescription = modifications.modiDescription;
    this.modiAction = modifications.modiAction;
    this.modComments = modifications.modComments;
    this.modPhotos = modifications.modPhotos;
  }
}
