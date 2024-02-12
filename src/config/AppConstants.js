const beRepos = {
    'Service Request Backend': 'https://bitbucket.org/utecdev/service-requests-backend/src/master/',
    'Polaris': 'https://bitbucket.org/utecdev/polaris-backend/src/master/',
    'Utec Microservices': 'https://bitbucket.org/utecdev/utec-microservices/src/master/',
    'Service SR Tracker': 'https://bitbucket.org/utecdev/service-sr-tracker/src/master/',
    'Service User Onboarding': 'https://bitbucket.org/utecdev/service-user-onboarding/src/master/',
    'Microservices': 'https://bitbucket.org/utecdev/microservices/src/master/',
    'Backend Lambdas': 'https://bitbucket.org/utecdev/backend-lambdas/src/master/',
    'BPD': 'https://bitbucket.org/utecdev/bpd-qrc-backend/src/master/',
    'Design Management': 'https://bitbucket.org/utecdev/designs-management/src/master/',
    'Service Notification': 'https://bitbucket.org/utecdev/service-notification-engine/src/master/',
    'Referral System': 'https://bitbucket.org/utecdev/referral-system/src/master/',
    'MMMS': 'https://bitbucket.org/utecdev/mmms-backend/src/master/',
};

const feRepos = {
    'Admin Panel': 'https://bitbucket.org/utecdev/admin-panel/src/master/',
    'Polaris': 'https://bitbucket.org/utecdev/polaris/src/master/',
    'CCP': 'https://bitbucket.org/utecdev/contact-center-panel/src/master/',
    'MMMS': 'https://bitbucket.org/utecdev/mmms-microsite/src/master/',
    'BPD': 'https://bitbucket.org/utecdev/bpd-qrc-frontend/src/master/',
    'Wep App': 'https://bitbucket.org/utecdev/aem-web/src/master/',
    'IHB Android': 'https://bitbucket.org/utecdev/ihb-android/src/master/',
    'Partner Android': 'https://bitbucket.org/utecdev/partner-android/src/master/',
    'IHB IOS': 'https://bitbucket.org/utecdev/ihb-ios-app/src/master/',
    'Partner IOS': 'https://bitbucket.org/utecdev/partner-ios/src/master/',
};

const jiraShortcuts = {
    'Assigned To Me':
        'https://utec.atlassian.net/issues/?jql=assignee%20in%20(currentUser())%20AND%20status%20in%20(Blocked%2C%20Groomed%2C%20%22In%20Progress%22%2C%20%22In%20Review%22%2C%20Invalid%2C%20New%2C%20Open%2C%20Planning%2C%20QA%2C%20Ready%2C%20%22Ready%20for%20UAT%22%2C%20Reopened%2C%20Review%2C%20%22Test%20Failed%22%2C%20%22To%20Do%22%2C%20Triage%2C%20UAT%2C%20%22Under%20investigation%22)%20ORDER%20BY%20updated%20DESC%2C%20summary%20ASC%2C%20status%20ASC%2C%20priority%20DESC%2C%20created%20DESC',
    'Releases': 'https://utec.atlassian.net/projects/IFA?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page',
    'Roadmap': 'https://utec.atlassian.net/jira/software/c/projects/IFA/boards/29/roadmap',
    'Backlogs': 'https://utec.atlassian.net/jira/software/c/projects/IFA/boards/29/backlog?issueLimit=100',
    'Active Sprint': 'https://utec.atlassian.net/jira/software/c/projects/IFA/boards/29',
    'My Issues': 'https://utec.atlassian.net/jira/software/c/projects/IFA/issues/?jql=project%20IN%20%28%22IFA%22%2C%22External%20Facing%20Apps%22%2C%22Utec%20Tech%20Support%22%2C%22Quality%20Track%22%2C%22Web%20App%22%29%20AND%20type%20IN%20%28standardIssueTypes%28%29%2CsubTaskIssueTypes%28%29%29%20AND%20assignee%20%3D%20currentUser%28%29%20ORDER%20BY%20created%20DESC',
};

const commonShortcuts = {
    'HR Portal': 'https://iprogrammer.greythr.com/v3/portal/ess/home',
    'Outlook Mail': 'https://outlook.office.com/mail/',
    'Google Mail': 'https://mail.google.com/mail/u/0/#inbox',
    'AWS': 'https://ap-south-1.console.aws.amazon.com/console/home?nc2=h_ct&region=ap-south-1&src=header-signin#',
};

const jiraProjects = {
    IFA: 'https://utec.atlassian.net/browse/IFA-',
    EA: 'https://utec.atlassian.net/browse/EA-',
    QT: 'https://utec.atlassian.net/browse/QT-',
    UTS: 'https://utec.atlassian.net/browse/UTS-',
    PET: 'https://utec.atlassian.net/browse/PET-',
};

const onetechnical = {
    "Dev": "https://d1e6yiez0hqgz1.cloudfront.net/",
    "Stage": "https://onetechnical.utecstage.com/",
    "Preprod": "https://onetechnical-preprod.utecstage.com/",
    "Prod": "https://onetechnical.utecbuild.com/"
}

const adminPanel = {
    "Dev": "https://test-admin.utecstage.com/",
    "Stage": "https://admin.utecstage.com/",
    "Preprod": "https://admin-preprod.utecstage.com/",
    "Prod": "https://admin.utecbuild.com/"
}

const ccp = {
    "Dev": "https://d3hltqg7xurqp6.cloudfront.net/login",
    "Stage": "https://experience.utecstage.com/login",
    "Preprod": "https://cx-preprod.utecstage.com/login",
    "Prod": "https://experience.utecbuild.com/login"
}

const mmms = {
    "Dev": "",
    "Stage": "https://meramakaan.utecstage.com/",
    "Preprod": "",
    "Prod": "https://meramakaan.utecbuild.com/"
}

const bpd = {
    "Dev": "",
    "Stage": "https://bpdloyalty.utecstage.com/home",
    "Preprod": "https://dfoh5qngxb25s.cloudfront.net/",
    "Prod": "https://bpdloyalty.utecbuild.com/"
}

const webApp = {
    "Dev": "",
    "Stage": "https://utecstage.com/",
    "Preprod": "",
    "Prod": "https://utecbuild.com/"
}

module.exports = {
    beRepos,
    feRepos,
    jiraShortcuts,
    commonShortcuts,
    jiraProjects,
    onetechnical,
    adminPanel,
    ccp,
    bpd,
    mmms,
    webApp
};
