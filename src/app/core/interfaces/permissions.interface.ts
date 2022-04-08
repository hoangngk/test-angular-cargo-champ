export interface Permission {
  add: boolean;
  edit: boolean;
  delete: boolean;
  view: boolean;
}

export enum PermissionValues {
  Add = 'add',
  Edit = 'edit',
  Delete = 'delete',
  View = 'view'
}

export interface ShareRoadmap {
  roadmapId: string;
  permission: Permission;
}

export interface ShareRoadmapByEmail extends ShareRoadmap {
  userEmail: string[];
}

export interface ShareRoadmapByUser extends ShareRoadmap {
  userId: string;
}
