package com.cfl.controller;

import com.cfl.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
    @Value("${upload.file.path}")
    private String uploadPath;

    @RequestMapping("hello")
    @ResponseBody
    public String hello(){
        return "hello";
    }

    @RequestMapping("getuploadPath")
    @ResponseBody
    public String getUploadPath(){
        return uploadPath;
    }
}
