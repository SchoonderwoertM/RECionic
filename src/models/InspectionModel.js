export class InspectionModel {
  constructor(id, address, inspections, completed ) {
    this.id = id;
    this.completed = completed;
    this.address = new Array(new AddressModel(address[0]));
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
    this.damLocation = damage ? damage.damLocation : "";
    this.damNew = damage ? damage.damNew : "";
    this.damType = damage ? damage.damType : "";
    this.damDate = damage ? damage.damDate : "";
    this.damAcuteAction = damage ? damage.damAcuteAction : "";
    this.damDescription = damage ? damage.Description : "";
    this.damPhotos = damage ? damage.Photos : "";
  }
}

export class MaintenanceModel {
  constructor(maintenance) {
    this.maintLocation = maintenance ? maintenance.maintLocation : "";
    this.maintType = maintenance ? maintenance.maintType : "";
    this.maintAcuteAction = maintenance ? maintenance.maintAcuteAction : "";
    this.maintCost = maintenance ? maintenance.maintCost : "";
    this.maintPhotos = maintenance ? maintenance.maintPhotos : "";
  }
}

export class InstallationModel {
  constructor(installations) {
    this.techLocation = installations ? installations.techLocation : "";
    this.techType = installations ? installations.techType : "";
    this.techMalfunction = installations
      ? installations.techMalfunction
      : "";
    this.techTestProcedure = installations ? installations.techTestProcedure : "";
    this.techApproved = installations ? installations.techApproved : "";
    this.techComments = installations ? installations.techComments : "";
    this.techPhotos = installations ? installations.techPhotos : "";
  }
}

export class ModificationsModel {
  constructor(modifications) {
    this.modiSituation = modifications ? modifications.modiSituation : "";
    this.modiLocation = modifications ? modifications.modiLocation : "";
    this.modiPerformedBy = modifications ? modifications.modiPerformedBy : "";
    this.modiDescription = modifications ? modifications.modiDescription : "";
    this.modiAction = modifications ? modifications.modiAction : "";
    this.modComments = modifications ? modifications.modComments : "";
    this.modPhotos = modifications ? modifications.modPhotos : "";
  }
}
