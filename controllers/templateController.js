import {join} from 'path';
const templateController = {}
templateController.home = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','index.html');
    res.sendFile(template_path);
}
templateController.about = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','about.html');
    res.sendFile(template_path);
}

templateController.contact = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','contact.html');
    res.sendFile(template_path);
}
templateController.services = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','services.html');
    res.sendFile(template_path);
}
templateController.login = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','login.html');
    res.sendFile(template_path);
}
templateController.signup = async(req,res)=>{
    const template_path  = join(process.cwd(),'views','templates','signup.html');
    res.sendFile(template_path);
}

export {templateController}
